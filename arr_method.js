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