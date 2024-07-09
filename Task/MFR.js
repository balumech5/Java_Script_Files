// MaP  :

const number = [1,2,3,4,5,6,7,8]
// const newmap = number.map((val,idx,arr)=>idx * 3)
// console.log(newmap);

// const filters = number.filter((val,idx,arr)=>val%2==0)
// console.log(filters);

// map method in java script is used to create a new array by applying a function to each element of an existing array.
// it passes three parameters in an function
// Filter  :
// The filter() method in javascript is used to create a new array with all elements that pass a certain test implemented by the provided function
// it does not mutate the original array; instead,
// it returns a new array containinig onoy the elements for which the provided function return true.
 
// Reduce :Syntax

// .reduce((accumulator, value, index, actualarray))
//  it will add or sub ad bring the value in short form
// It passes four parameters in a function

const reducer = number.reduce((acc,val,idx,arr)=>{
    return acc + val  
},3)
console.log(reducer);