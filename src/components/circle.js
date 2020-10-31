// import using require

// declare class


// export class using module.exports
import shape from './shape';
export default class Circle extends shape {
    constructor(color) {
        //first line of subclass constructer should call superclass constructer with appropriate parameters;
         super(color);
    }
    calculateArea() {
        console.log("Area of circle with color: " + this.color);
        return 3.14*5*5;
    }
}