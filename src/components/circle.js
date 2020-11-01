// import using require

// declare class


// export class using module.exports
// import shape from './shape' ;
const shape = require('./shape');
class Circle extends Shape {
    constructor() {
        //first line of subclass constructer should call superclass constructer with appropriate parameters;
         super();
    }
        console.log("Area of circle with color: " + this.color);
        return 3.14*5*5;
    }
}
module.exports = Circle;