// declare class

// export class using module.exports

export default class shape {
    constructor(color) {
        this.color = color;

    }
    drawshape() {
        console.log("Drawing a Shape");
    }
    calculateArea() {
        console.log("Do't know area of Unknown Shape");
        return 0;
    }
}
// class Circle extends shape {
//     constructor(color) {
//         //first line of subclass constructer should call superclass constructer with appropriate parameters;
//          super(color);
//     }
//     calculateArea() {
//         console.log("Area of circle with color: " + this.color);
//         return 3.14*5*5;
//     }
// }

// class GreenCircle extends Circle {
//      //first line of subclass constructer should call superclass constructer with appropriate parameters;
//     constructor() {
//         super("green");
//     }
// }