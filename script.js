//defining global variables, some need to be redefined later//
p = document.getElementById("principal").value;
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100;
var year = new Date().getFullYear() + parseInt(years);
var amount = interest;
//function making sure principal is a positive number//
function checkdata(principal) {
    if (principal <= 0) {//if principal is less than orequal to zero//
        alert("Please enter a positive number");
        var principalElement = document.getElementById("principal");
        //Return focus to element//
        principalElement.focus();
        return false;
    } else {
        //if greater than 0 returns true//
        return true
    }
}
function compute() { //variables redefined due to failure of function. Interest calculation//
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    checkdata(principal); //runs our checkdata fuction//
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years); //gets the current date//
    var amount = interest;
    // interest and amount are interchangable and will represent the same value
    //display the inner text with result//
    document.getElementById("result").innerHTML = "If you deposit $" + principal + "\<br\>at an interest rate of " + rate + "%,\<br\>you will receive an amount of $" + amount + "\<br\>in the year " + year + "\<br\>";
}
function updateRate() { //fuction to update slider value//
    var rateval = document.getElementById("rate").value; //determines the value of rate value//
    document.getElementById("rate_val").innerText = rateval + '%'; //makes the inner text the update value of rate + a %//
}
