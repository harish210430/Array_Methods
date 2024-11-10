// Lecture 1.

// Basic Array Methods:

// flat(num_para): It is used to convert multi-dimentional Array to 1-D Array / flat Array.
let numbers = [1,2,[3,4,[5,6,[7,8]]]];
console.log(numbers); 
console.log(numbers.flat(4)); // does'nt mutate the Array.

// reverse(): It reverse the Element of current Array.
let colors = ["White", "Green", "Yellow", "Black"];
// colors.reverse();  // It mutates(modify) the Array.
console.log(colors);

// splice(strt_Idx, howmany, "Add"); it used to remove as well as add the elements.
console.log(colors.splice(1, 1, "Brown"));
console.log(colors);

// unshift("color_para"):  add element at start in Array.
colors.unshift("Gold");
console.log(colors);

// shift(); Delete an element from strt from Array.
colors.shift();
console.log(colors);


// Lecture 2. Undestanding callback pattern and array.forEach Method:-

// To concatinate the Array:

let allcolors = ["gold", "silver", "brown", "pink", "black", "orange"];
let allnumbers = [1, 3, 9, 19, 30, 90, 89, 12];

function forEachElement(arr, cb) {
    for(let i of arr) {
        cb(i);
    }
};

let alcolor = "";

// HOF & callBack func. eachColor - 
forEachElement(allcolors, eachColor);

function eachColor(color) {
    alcolor = alcolor + color + " ";
}
console.log(alcolor);


let alnums = "";

// HOF & callBack func. eachnum -
forEachElement(allnumbers, eachnum);

function eachnum(num) {
    alnums += num + " ";
}
console.log(alnums);

// function forEachElement(arr) {
//     let element = "";
//     for(let i of arr) {
//         element += i + " ";
//     }
//     return element;
// }
// console.log(forEachElement(allcolors));
// console.log(forEachElement(allnumbers));


// Methods:
// 1. Array.forEach(cbfn_para): forEach is an Array method, accept a cbfn And allows to run that cbfn for each element of the Array. 
// forEach() method does not return Anyrhing.

function log(i) {
    console.log(i);
}
allcolors.forEach(log);
allnumbers.forEach(log);

// Anonymous Function inside forEach
allnumbers.forEach(function(num) {
    console.log(num);
});

// callBack with Arrow_func. inside forEach
allcolors.forEach((col) => console.log(col));