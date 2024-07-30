// 1. you have an Object representing a person. use ES6 destruction to extract the name and age properties.
{const person = {
    name: "name",
    age: "age"
}
// console.log(person);
let {name, age} = person;
console.log(name);
console.log(age);}

// 2. ES6 Module
// Create a module that exports a function to calculate the area of a circle and import it into another File.
import myFunction from './module.js';

const radius = 5;
const area = myFunction(radius);
console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);




// 3. ES6 classes
// Create a class Rectangle with properties width and height and a method to calculate the HTMLTextAreaElement.
{class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    calculateArea() {
      return this.width * this.height;
    }
  }

  const myRectangle = new Rectangle(10, 5);
  const area = myRectangle.calculateArea();
  console.log(`The area of the rectangle is: ${area}`);}



// 4. Getter and Setter in ES6
// Create a class Person with a getter and setter for the fullName property.
const Person = {
    fullName: "Asit Chandra Roy",
    get full(){
        return this.fullName;
    }
}
console.log(Person.full);

{const Person = {
    fullName: "Asit Chandra Roy",

    set fullN(fullNam){
        this.fullName = fullNam;
    }
}

Person.fullN = "Eshan Ahamed Ahad";
console.log (Person);}




// 5. Class Expressions
// Create a class Expression for a Circle with a method to calculate the circumference.
let Circle = class{
    constructor(r){
        this.r = r;
    }

    getCircumference() {
        const PI = Math.PI;
        return 2 * PI * this.r;
      }
}


// 6. JavaScript Computed Properties
// Create an Object with computed property names based on variables.
let PropName = "userName";

const UserInfo = {
    [PropName]:"",
    hobby:""
}

console.log(UserInfo);

// 7. Inheritance
// Create a base class Animals and a derived class Dog that inherits from Animal.
class Animals{
    constructor(h){
        this.h = h;
    }
    Dog(){
        return "" + this.h
    }
}

class Model extends Animals{
    constructor(h,Model){
        super(h);
        this.model = Model;
    }
    show(){
        return this.Dog() + "And Model Is" + this.model;
    }
}

let myCar = new Model("", "");
console.log(myCar);
console.log(myCar.show());

// 8. New Target Operators
// Use new.target to create an abstract class Shape that cannot be instantiated directly.
{class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot directly instantiate an abstract class.");
      }
    }
  }


  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }

    area() {
      return Math.PI * this.radius ** 2;
    }
  }

  const circle = new Circle(5);
  console.log(circle.area());
  }


// 9. Static Methods
// Create a class MathUtil with a static method square to calculate the square of a Number.
class MathUtil {
    static square(number) {
      return number * number;
    }
  }

  console.log(MathUtil.square(7));


// 10. Symbol
// Create an Object with a symbol as a property key and demonstrate accessing it.
let mySymbol = Symbol('mySymbol');

let myObject = {
  [mySymbol]: 'This is a value associated with the symbol'
};

console.log(myObject[mySymbol]);
