"use strict";
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
            console.log("Velocity actual " + this.velocity);
        }
        else {
            console.log("Velocity max " + this.velocity);
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
