class Point {
    constructor(public x: number, public y: number){}

        move = function(_x: number, _y: number): void {
            console.log(`Moving (${this.x},${this.y}) to (${this.x + _x},${this.y + _y}).`);

            this.x += _x;
            this.y += _y;
    }
}

class Rectangle {
    constructor(public pUL: Point, public pUR: Point, public pLL: Point, public pLR: Point) {};
        
    move = function(_x: number, _y: number): void {
        this.pUR.move(_x, _y);
        this.pUL.move(_x, _y);
        this.pLL.move(_x, _y);
        this.pLR.move(_x, _y);
    }
    
    getArea = function(): number {
        return Math.abs((this.pUR.x - this.pUL.x)) * Math.abs((this.pUR.y - this.pUL.y));
    }
}

const point = new Point(5, 5);
console.log(point);

point.move(5, -5);
console.log(point);


const rectangle = new Rectangle(
    new Point(0, 0),
    new Point(10, 0),
    new Point(0, 10),
    new Point(10, 10)
)
console.log(rectangle);

rectangle.move(3, -3);
console.log(rectangle);

console.log(rectangle.getArea());

export {Point}