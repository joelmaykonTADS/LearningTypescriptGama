"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Public attributes
var DateType = /** @class */ (function () {
    function DateType(day, month, year) {
        if (year === void 0) { year = 1970; }
        this.day = day;
        this.month = month;
        this.year = year;
    }
    return DateType;
}());
var date = new DateType(1, 1);
console.log(date.day + "/" + date.month + "/" + date.year);
//Private attributes 
var DateType2 = /** @class */ (function () {
    function DateType2(day, month, year) {
        if (year === void 0) { year = 1970; }
        this.day = day;
        this.month = month;
        this.year = year;
    }
    DateType2.prototype.getDay = function () {
        return this.day;
    };
    DateType2.prototype.getMonth = function () {
        return this.month;
    };
    DateType2.prototype.getYear = function () {
        return this.year;
    };
    return DateType2;
}());
var date2 = new DateType2(11, 2);
console.log(date2.getDay() + "/" + date2.getMonth() + "/" + date2.getYear());
var Car = /** @class */ (function () {
    function Car(model, velocityMax) {
        if (velocityMax === void 0) { velocityMax = 220; }
        this.model = model;
        this.velocityMax = velocityMax;
        this.velocity = 0;
    }
    Car.prototype.alterVelocity = function (acc) {
        if (this.velocity + acc <= this.velocityMax) {
            this.velocity += acc;
            console.log("Velocity actual of " + this.model + " : " + this.velocity);
        }
        else {
            console.log("Velocity max of " + this.model + " : " + this.velocity);
        }
    };
    Car.prototype.accelerate = function () {
        this.alterVelocity(5);
    };
    return Car;
}());
var car = new Car('Prism', 30);
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro() {
        return _super.call(this, 'Camaro', 50) || this;
    }
    return Camaro;
}(Car));
var camaro = new Camaro();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
camaro.accelerate();
