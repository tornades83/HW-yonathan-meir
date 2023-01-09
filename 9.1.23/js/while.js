var rev = "";
var dash = "";
var num = Math.random() * 10000;
if (num < 0) {
    var dash = "-";
}
while (num != 0) {
    last + num % 10;
    var rev = rev + last;
    var num = (num - last)/10;
} alert(rev + dash);

