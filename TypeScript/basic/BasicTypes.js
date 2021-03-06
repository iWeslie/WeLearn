// a boolen value
var isDone = false;
// a number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// strings
var color = "Blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month";
// let sentence: string = "Hello, my name is " + fullName + ".\n\n" + 
//     "I'll be " + (age + 1) + "years old next month.";
// array
var list = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];
// tuple
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
// When accessing an element with a known index
// the correct type is retrieved:
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x[3].toString());
// enum 
// enum Color { Red, Green, Blue}
// let c: Color = Color.Green;
// By default, enums begin numbering their members starting at 0
// You can change this by manually setting the value of one of its members.
// For example, we can start the previous example at 1 instead of 0:
// enum Color { Red = 1, Green, Blue }
// let c: Color = Color.Green;
// Or, even manually set all the values in the enum:
// enum Color { Red, Green, Blue }
// let c: Color = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName.toString());
// any
var notSure = 4;
notSure = "maybe a string instead";
console.log(typeof notSure + " = " + notSure);
notSure = false;
console.log(typeof notSure + " = " + notSure); // okay, definitely a boolean
// You might expect `Object` to play a similar role, as it does in other languages. 
// But variables of type Object only allow you to assign any value to them.
// you can’t call arbitrary methods on them, even ones that actually exist:
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
console.log(prettySure);
// prettySure.toFixed(); 
// Error: Property 'toFixed' doesn't exist on type 'Object'.
var list2 = [1, true, "free"];
console.log(list2);
list2[1] = 100;
console.log(list2);
// void
// void is a little like the opposite of any
function warnUser() {
    alert("This is my warning message");
}
// Declaring variables of type void is not useful 
// because you can only assign undefined or null to them:
var unusable = undefined;
// null and undefined
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
// By default null and undefined are subtypes of all other types. 
// That means you can assign null and undefined to something like number.
// However, when using the --strictNullChecks flag, null and undefined are only assignable 
// to void and their respective types. This helps avoid many common errors. In cases where 
// you want to pass in either a string or null or undefined, you can use the union type 
// `string | null | undefined`.
// we encourage the use of --strictNullChecks when possible
// never
// The never type represents the type of values that never occur. 
// For instance, never is the return type for a function expression or an arrow function 
// expression that always throws an exception or one that never returns; 
// Variables also acquire the type never when narrowed by any type guards that can never be true.
// The never type is a subtype of, and assignable to, every type; 
// however, no type is a subtype of, or assignable to, never (except never itself). 
// Even any isn’t assignable to never.
// Function returing never must have unreachable end point
function error(messages) {
    throw new Error(messages);
}
// Inferred return typr is never
function fail() {
    return error("Something failed");
}
// Function returning never must unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
// type assertions
var someValue = "this is a string";
var strLength = someValue.length;
// let strLength: number = (someValue as string).length;
//# sourceMappingURL=BasicTypes.js.map