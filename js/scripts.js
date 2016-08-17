// div by 4 = true
// or div by 400 = true
// or div by 100 = false
// return false
// Zee Math Goes Here
var isLeap = function(whatYear) {
  if ((whatYear % 100 === 0) && (whatYear % 400 !== 0)) {
    return false;
  } else  if (whatYear % 4 === 0) {
    return true;
  } else {
    return false;
  }
};


// Interface Code Ist Heer Mein Herr
$(document).ready(function() {
  $("#leapForm").submit(function(event) {
    var yearInput = parseInt($("#leapInput").val());
    var lResult = isLeap(yearInput);
    $("#leapResult").text(lResult);
    event.preventDefault();
  });

});
