var rev = "";
var palindrome = false;
var num = 6789876;
var origin = num;
while (num != 0) {
    var last = + num % 10;
    rev += last;
    num = (num - last) / 10;
    if (origin == rev) {
        var palindrome = true;
    }
}
alert("is palindrome")