// declare class

// export class using module.exports

class Shape {
    constructor() {
        this.color = "red";

    }
    // drawshape() {
    //     console.log("Drawing a Shape");
    // }
    // calculateArea() {
    //     console.log("Do't know area of Unknown Shape");
    //     return 0;
    // }
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