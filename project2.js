// Student details
let marks = [
    {name:"student1",marks:50 },
    {name:"student2",marks:60 },
    {name:"student3",marks:75 },
    {name:"student4",marks:88 },
    {name:"student5",marks:90 }
];
// Filter students with marks greater than 50
let passedStudents =marks.filter(function(student) {
    return student.marks > 50;
});

// Display result
console.log("Students with Marks Greater Than 50:");
console.log(passedStudents);