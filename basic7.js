/*let student1="Anu";
let student2="Ajay";
let student3="Arya";
let students=["Anu","Ajay","Arya"];
console.log (students[0]);
console.log (students[1]);*/

let fruits=["Apple","Orange","Grapes"];
//to return length of an array
console.log(fruits.length);
//add element at the end of an array
fruits.push("Banana");
console.log(fruits);
//removes the last element
fruits.pop();
console.log(fruits);

//add elemts at the beginning of an array
fruits.unshift("Kiwi");
console.log(fruits);

//removes the 1st element
fruits.shift();
console.log(fruits);
//returns index of an element
console.log(fruits.indexOf("Grapes"));
console.log(fruits.indexOf("Kiwi"));

//check existence of an element
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Kiwi"));