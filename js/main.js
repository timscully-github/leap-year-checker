
var submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function(){
  year = year.value;
  isLeap(year);
  submitBtn.setAttribute("disabled", true);
}

function isLeap(year) {
  if (((year % 4) === 0) && (((year % 100) !== 0) || ((year % 400) === 0))){
      document.getElementById("result").innerHTML = "Leap year.";
  } else {
      document.getElementById("result").innerHTML = "Not leap year.";
  }
}
