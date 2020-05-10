var currentAge = document.getElementById("currentAge");
var submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function(){
  currentAge = currentAge.value;
  lifeInWeeks(currentAge);
  submitBtn.setAttribute("disabled", true);
}

function lifeInWeeks(currentAge) {
    var yearsLeft = 81 - currentAge;
    var noOfDays = yearsLeft * 365;
    var noOfWeeks = yearsLeft * 52;
    var noOfMonths = yearsLeft * 12;
    document.getElementById("result").innerHTML = "Your current age is " + currentAge + "<br><br>This means you have " + noOfDays + " days, " + noOfWeeks + " weeks, and " + noOfMonths + " months left!!! <br><br> .....you best get on with it";
}
