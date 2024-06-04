"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.move = function (_x, _y) {
            console.log("Moving (".concat(this.x, ",").concat(this.y, ") to (").concat(this.x + _x, ",").concat(this.y + _y, ")."));
            this.x += _x;
            this.y += _y;
        };
    }
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(pUL, pUR, pLL, pLR) {
        this.pUL = pUL;
        this.pUR = pUR;
        this.pLL = pLL;
        this.pLR = pLR;
        this.move = function (_x, _y) {
            this.pUR.move(_x, _y);
            this.pUL.move(_x, _y);
            this.pLL.move(_x, _y);
            this.pLR.move(_x, _y);
        };
        this.getArea = function () {
            return (this.pUR.x - this.pUL.x) * (this.pUR.y - this.pUL.y);
        };
    }
    ;
    return Rectangle;
}());
var point = new Point(5, 5);
console.log(point);
point.move(5, -5);
console.log(point);
var rectangle = new Rectangle(new Point(0, 0), new Point(10, 0), new Point(0, 10), new Point(10, 10));
console.log(rectangle);
rectangle.move(3, -3);
console.log(rectangle);
console.log(rectangle.getArea());
