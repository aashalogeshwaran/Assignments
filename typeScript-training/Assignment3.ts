let studentNames : string [] = ["Suresh","Mahesh","Naresh"];
let marks : number [] = [75, 80, 82];
for (let mark of marks){
   //add 10 marks to each student 

    mark += 10;
    //console.log(mark);
    //store the updated marks in the array
    marks[marks.indexOf(mark - 10)] = mark; 
    let avg :number = totalMarks(marks) / marks.length;
    
}
console.log("Updated marks of students:");
console.log(studentNames[0] + ": " + marks[0]);
console.log(studentNames[1] + ": " + marks[1]);
console.log(studentNames[2] + ": " + marks[2]);
console.log(`Average marks of students: ${totalMarks(marks) / marks.length}`);

function totalMarks(marks: number[]) : number {
    let total : number = 0;     
    for (let mark of marks){
        total += mark;
    }   
    return total;
}   