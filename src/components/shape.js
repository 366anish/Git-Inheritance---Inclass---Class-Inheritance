// declare class

// export class using module.exports

class Shape {
    constructor() {
        this.color = "red";

    }
     drawShape() {
        console.log("Drawing a Shape");
     }
     calculateArea() {
        console.log("Area of shape with color: " + this.color);
     }
}
module.exports = Shape;

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
//hjijooio