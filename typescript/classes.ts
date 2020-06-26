//Public attributes
class DateType {
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
        return this.month;
    }

    getYear() {
        return this.year;
    }

}

const date2 = new DateType2(11, 2);
console.log(`${date2.getDay()}/${date2.getMonth()}/${date2.getYear()}`);

class Car {
    private velocity: number = 0;
    constructor(
        public model: string,
        private velocityMax: number = 220) { }
    private alterVelocity(acc: number) {
        if (this.velocity + acc <= this.velocityMax) {
            this.velocity += acc;
            console.log(`Velocity actual of ${this.model} : ${this.velocity}`)
        } else {
            console.log(`Velocity max of ${this.model} : ${this.velocity}`)
        }
    }
    accelerate() {
        this.alterVelocity(5);
    }   
}

const car = new Car('Prism', 30)
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();


class Camaro extends Car{
    private turbo = false;
    constructor() {
        super('Camaro', 50); 
    }
    onTurbo() {
        this.turbo = true;
        console.log(`Turbo on`);
    }
}

const camaro = new Camaro();
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