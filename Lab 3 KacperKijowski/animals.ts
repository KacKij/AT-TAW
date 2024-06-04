class Animal {
    constructor(public name: string) {}
        dajGlos = function(): void {
            return;
        }
}

class Doggo extends Animal {

    constructor(public name: string) {
        super(name);
    }
    dajGlos = function(): void {
        console.log(`${this.name}: Hau`);
    }
}

class Catto extends Animal {
    constructor(public name: string) {
        super(name);
    }
    dajGlos = function(): void {
        console.log(`${this.name}: Miau`);
    }
}

const animnal = new Animal('zwierz');
const piesel = new Doggo('Tytuslaw');
const kotel = new Catto('Borys');

animnal.dajGlos();
piesel.dajGlos();
kotel.dajGlos();