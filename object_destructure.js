// const stdobj = {
//     name : "balu",
//     age : 28,
//     bgrp : "B+"
// }

// console.log(stdobj.name);

// const {name,age,bgrp} = stdobj;
// console.log(name);

// object destructure;
// onject destructuring in java script allows you to extract multiple properties
// from an object and assign them to variablesin a concise and reachable way.
// enhancing code radability abd reducing repetetion

/* Array Destructure
const fruits = ["mango", "Banana", "Apple"]
const [fruits1, fruits2, fruits3, fruits4] = fruits;
console.log(fruits1);
console.log(fruits4);

/*array destructuring allows you to extract values from arrays and assign, them to variables
in a concise way facilitating maipulation and usage of array elements
without dircetly accessing them by index


/* Object creation
let name = "balu"
let age = 30

const newobj = {
    name : name,
    age : age
}
console.log(newobj);
*/

//  shorthand property
const name = "balu"
const age = 30

const newobj = {
name,
age
}
console.log(newobj);
