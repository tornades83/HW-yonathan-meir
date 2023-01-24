var studs = [""];

for (let i = 0; i < 5 ; i++) {
   var stud = prompt("yours name ?" + (1+1)).toLowerCase();
    studs.push(stud);
}


studs.sort();
var result = studs.join(",");
alert(result);




// var students =["meir" , "yonathan" , "david" , "avi" , "yosef"];
// var students = students1;
// var students1 = students.push("netanel");

// alert(students1);
// var students = students2;
// var students2 = students.sort(1 ,3);

// alert(students2);
// var students = students3;
// var students3 = students.join(",");

// alert(students3);