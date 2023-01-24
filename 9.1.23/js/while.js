// var rev = "";  .1
// var dash = "";  .1
// var num = Math.random() * 10000;  .0
// if (num < 0) {  .1
// var dash = "-"; .1
// }
// while (num != 0) {   .1
// last + num % 10;    .0
// var rev = rev + last;  .0
// var num = (num - last)/10;  .0
// } alert(rev + dash);   .1


// corection
while(!num){
var num = parseInt (prompt("Enter a real  number please"));
}
var dash = "";
var rev = "";
if (num < 0) {
    dash = "";
    num = -num;
}
while (num != 0) {
    var temp = num % 10;
    rev += temp;
    num = Math.trunc(num / 10);
}

alert(rev + dash);

