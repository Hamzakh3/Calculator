var n1;
var op;

function setValue(a) {

    var v1 = document.getElementById('txt').value;

    document.getElementById('txt').value = v1 + a;


}

function setSecondValue(a) {

    n1 = document.getElementById('txt').value;
    document.getElementById('n').innerHTML = n1 + a;
    document.getElementById('txt').value = "";
    op = a;
}

function result() {

    var n2 = document.getElementById('txt').value;
    var num1, num2;
    num1 = parseInt(n1);
    num2 = parseInt(n2);
    var result;
    if (op == '+') {
        result = num1 + num2;
    } else if (op == '-') {
        result = num1 - num2;
    } else if (op == '*') {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }



    document.getElementById('txt').value = result;
    document.getElementById('n').innerHTML = "";




}

function clear1() {

    document.getElementById('txt').value = "";
    document.getElementById('n').innerHTML = "";

}