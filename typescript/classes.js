"use strict";
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
console.log(date.day, date.month, date.year);
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
    return DateType2;
}());
var date2 = new DateType2(11, 2);
console.log(date2.getDay());
