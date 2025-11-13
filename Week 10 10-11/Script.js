function calculate(){
    var a = parseFloat(document.calcform.txta.value);
    var b = parseFloat(document.calcform.txtb.value);
    var operator = document.calcform.slto.value;
    var result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    }   else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    if (b === 0) {
        alert("Cannot divide by zero!");
        document.calcform.txtr.value = "";
        return;}
    }  
    if (operator === "^") {
        result = Math.pow(a, b);
    }
    
    if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers!");
    document.calcform.txtr.value = "";
    return;
}


// getElementById to set the result
// document.getElementById("lblResult").innerText = result;
document.calcform.txtr.value = result;
}