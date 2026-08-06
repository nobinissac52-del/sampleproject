//javascript object to JSONdata

let student={
    name:"Nobin",
age :30,
cousre:"playwright",
grade:"A"

};
let jsondata=JSON.stringify (student);
console.log(jsondata);
console.log (typeof jsondata);

//JSON string to object
const jsondata1='{"name":"Nobin","age":30}';
const student1=JSON.parse(jsondata1);
console.log(student1);
console.log(typeof student1);