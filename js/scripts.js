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
//Pigs Knees
var vowels = ["a","e","i","o","u","A","E","I","O","U"];
var isCon = function(letter) {
  if (!vowels.includes(letter)) {
    return true;
  } else {
    return false;
  }
}
var pigKnee = function(pigText) {
  if (vowels.includes(pigText[0])) {
    return pigText + "ay";
  }
  else if (pigText[0].toLowerCase() === "y") {
    return pigText.substring(1, pigText.length + 1) + "yay";
  }
  else if ((pigText[0] + pigText[1]).toLowerCase() === "qu") {
    return pigText.substring(2, pigText.length + 1) + "quay";
  }
  else
  {
    firstCons = [];
    pigArray = pigText.split("");
    for (var i = 0; i < pigText.length; i++ ) {
      if (isCon(pigArray[i])) {
        firstCons.push(pigArray[i]);
      }
      else if (pigArray[i] === "u") {
        firstCons.push(pigArray[i]);
      }
      else {
        i = pigText.length;
      }
  }
  };
  return pigText.substring(firstCons.length, pigText.length) + firstCons.join("") + "ay";
};
var pigLeg = function(pigSentence) {
  pigMatrix = pigSentence.split(" ");
  pigFinished = [];
  pigMatrix.forEach(function(pigElement) {
    console.log(typeof parseInt(pigElement));
    if ($.isNumeric(pigElement)) {
      pigFinished.push(pigElement);
    }
    else
    {
    pigFinished.push(pigKnee(pigElement));
    }
  });
  return pigFinished.join(" ");
}

// Interface Code Ist Heer Mein Herr
$(document).ready(function() {
  $("#leapForm").submit(function(event) {
    var yearInput = parseInt($("#leapInput").val());
    var lResult = isLeap(yearInput);
    $("#leapResult").text(lResult);
    event.preventDefault();
  });
//pig form
  $("#pigForm").submit(function(event) {
    var pInput = $("#pigInput").val();
    var pResult = pigLeg(pInput);
    $("#pigResult").text(pResult);
    event.preventDefault();
  });
});
