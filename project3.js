// Array of employee objects
let employees = [
    {id :1, name :"Jhon", department:"IT"},
    {id :2, name : "Pritam", department:"HR"},
    {id :3, name : "David", department:"Finance"},
];
//Extarct employee names using map() and arrow function
let employeeNames = employees.map(employee =>employee.name);
//Display result
console.log("employee Names:",employeeNames);