var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.dajGlos = function () {
            return;
        };
    }
    return Animal;
}());
var Doggo = /** @class */ (function (_super) {
    __extends(Doggo, _super);
    function Doggo(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.dajGlos = function () {
            console.log("".concat(this.name, ": Hau"));
        };
        return _this;
    }
    return Doggo;
}(Animal));
var Catto = /** @class */ (function (_super) {
    __extends(Catto, _super);
    function Catto(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.dajGlos = function () {
            console.log("".concat(this.name, ": Miau"));
        };
        return _this;
    }
    return Catto;
}(Animal));
var animnal = new Animal('zwierz');
var piesel = new Doggo('Tytuslaw');
var kotel = new Catto('Borys');
animnal.dajGlos();
piesel.dajGlos();
kotel.dajGlos();
