// const obj = { 
//     Name : "Harini",
//     Age : 1,
//     meth : function(){
//         console.log(this.Name);
//     }

// }
// obj.meth()

// Function Factory method

// function car (name, model, year){
//     return{
//         infocar : function(){
//             console.log(`The car name is  ${name} and the model is ${model} and the year is ${year}`);

//         }
//     }
// }
// const cardetails = car("Hyundai", "i10", 2013)
// cardetails.infocar()

//  function factory method

// A function factory method creates and returnsfunctions dynamically based on input parameters ofr configurations,
// allowing for flexible and efficient code geeration
// it encapsulates logic for generating functions with varying behaviors or properties.

// Constructor

function Car (name,model,year){
    this.name = name,
    this.model = model,
    this.year = year,
    this.infocar = function() {
        console.log(`${name},${model},${year}`);
    }
}
const cardet = new Car("Hyundai", "i10", 2013)
cardet.infocar()
