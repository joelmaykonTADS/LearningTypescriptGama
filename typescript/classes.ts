//Public attributes
class DateType{
    day: number;
    month: number;
    year: number;
    constructor(day: number, month: number, year: number = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

}

const date = new DateType(1, 1);
console.log(`${date.day}/${date.month}/${date.year}`);


//Private attributes 
class DateType2 {
    private day: number;
    private month: number;
    private year: number;
    
    constructor(day: number, month: number, year: number = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    
    getDay() {
        return this.day;
    }

    getMonth() {
        return this.year;
    }

    getYear() {
        return this.year;
    }

}

const date2 = new DateType2(11, 2);
console.log(`${date2.getDay()}/${date2.getMonth}/${date2.getYear()});