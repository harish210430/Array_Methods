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


// Methods: cbfn is a func. refence,
// 1. Array.forEach(cbfn_para): forEach is an Array method, accept a cbfn And allows to run that cbfn for each element of the Array. 
// forEach() method does not return Anyrhing.
   
// forEach() method is a HOF becoz it accept cbfn.
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



// forEach, map, filter, find, some, every, Methods : they all accept cbfn & give u access to all three elements (number, index, array) But index, array two are optional paras, And forEach does't return Anything.

// Lecture 3:-  Array.map & Array.filter Method:

// Array.map - It also accept a cbfn, And calls that callBack func. with 3 values (number, idx, arr) it always returns a same size of new array.
allnumbers = [1, 3, 9, 19, 30, 90, 89, 12];

// function double(number, idx, Array) {   // idx, Array are optional.
function double(number) {
    // console.log(number, idx, Array);   
    return number * 2;
    // When u do not return anything , it return undefined And Store it to new Array.
}
let doubleNumbers = allnumbers.map(double);
console.log(doubleNumbers);


// Array.filter() - is a method to filter out some values, also accept cbfn And calls that callBack func. with 3 values (number, idx, arr) and return new Array.

function isEven(num) {
    // return num % 2 === 0;  
    // When u do not return anything, func. return undefined And this (isEven) func. is'nt understand undefined So it convert Boolean(undefined) = false, whenEver u return a falsy value it's an Empty Array [].
}
 let evenNumbers = allnumbers.filter(isEven);
console.log(evenNumbers);



// Lecture 4:- Array.find & Array.findIndex : accept cbfn, they return only one value similar to previous method it also give access to (num, idx, array).
// Array.find : it return the first value that match the condition.
// Array.findIndex : return the index of that first value which match the condition.
allnumbers = [1, 3, 9, 19, 30, 90, 89, 12];

function isNum(num) {
    return num > 10;
}
let findReturn = allnumbers.find(isNum);
let findIdxReturn = allnumbers.findIndex(isNum);
console.log(findReturn);  // 19
console.log(findIdxReturn); // 3



// Lecture 5:- Array.some & Array.every
// Array.some : accept cbfn, cbfn needs to return 'true' atleast once for Any element, then the whole func. return "true" otherwise it returns "false".
let retNum = allnumbers.some(function(num) {
    return num < 2;
});
console.log(retNum); // true 

allcolors = ["gold", "silver", "brown", "pink", "black", "orange"];
let retColor = allcolors.some(function(color) {
    return color.includes("red"); 
});
console.log(retColor); // false


// Array.every : accept cbfn, cbfn needs to return 'true' for every elements then whole func. return "true" otherwise it returns "false".
let evryRetNum = allnumbers.every(function(num) {
    return num < 100;
});
console.log(evryRetNum); // true

let evryColor = allcolors.every(function(color) {
    return color.includes('e');  // false
    // return color.length > 3;  // true
});
console.log(evryColor); 



// Lecture 6:- Array.sort() - accept a compareFunction(Optional) for sorting Numbers Becoz it always does string_comparesion, it return the sorted Array (in Assending / Decending order).
// For String_Array : to sort in decending order, first sort the array and then reverse it by using:  str_arr.sort.reverse();
// sort() method always mutates the array.


// Precedence Order: "abcdef......xyzABCD.....XYZ"
allnumbers = [1, 3, 9, 19, 30, 90, 89, 12];

function compareFunction(a, b) {
    // negative < 0, a
    // positive > 0, b
    // 0 , same Rahega
    return a - b;
}
console.log(allnumbers.sort(compareFunction)); // [1, 3, 9, 12, 19, 30, 89, 90]
console.log(allnumbers);  // mutated [1, 3, 9, 12, 19, 30, 89, 90]

console.log(allcolors.sort().reverse()); // It sorts & reverse the Array_string.


// If we don't want to mutate the array then we create a clone of original array then sort it.

let cloneAllNums = [...allnumbers].sort(compareFunction);
console.log(cloneAllNums); // [1, 3, 9, 12, 19, 30, 89, 90]
console.log(allnumbers); // [1, 3, 9, 19, 30, 90, 89, 12]



// Lecture 7: Array.reduce(cbfn, initial_value) - accepts two parameter(cbfn, intl_val), In reduce() cbfn, It give u access to 4 elmnts (accumulator, num, i, arr)

// accltr. : first_val = initial_val, cbfn, whatEver it returns become the next val of the accumulator (In hindi: cbfn jo bhi return karega, vo value acc. me replace hogi.) 

// It is used to reducing a collection of values into a diff. shape of values Or into a single value.
// for Exp: we can reduce using sum of all elements and store into a variable (So it will be a single value). 

let nums = [1, 3, 9, 19, 30, 90, 89, 12];

// let sum = 0;
// nums.forEach((num) => sum += num);
// console.log(sum);


// Benefit to Use reduce(): hume 1 extra variable ko manage nhi krna padta.
let sum = nums.reduce((acc, num) => {
    return acc + num;
    }, 0);
console.log(sum);

// allcolors = ["gold", "silver", "brown", "pink", "black", "orange"];
// let allcolrs = "";
// allcolors.forEach((color) => allcolrs += color);
// console.log(allcolrs);

allcolors = ["gold", "silver", "brown", "pink", "black", "orange"];

let allcolrs = allcolors.reduce((acc, color) => {
    return acc + color + " ";
} , "");
console.log(allcolrs);

// reduce() can return Anytype of Data_type(value like: number, string, Arr, obj etc) based on initial_value.