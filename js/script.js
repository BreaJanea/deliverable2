function whatToWear() {
var eventType = prompt("What type of event are you attending? (casual, semi-formal, formal)");
var tempFahr = prompt("What is the temperature?");
var result;


  if (eventType == "casual" && tempFahr < 54){
  result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and a coat.";
  } else if (eventType == "casual" && tempFahr >= 54 && tempFahr <= 70){
    result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and a jacket.";
  } else if (eventType == "casual" && tempFahr > 70){
    result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and no jacket.";
  }
  if (eventType == "semi-formal" && tempFahr < 54){
    result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should  wear a polo and a coat.";
  } else if (eventType == "semi-formal" && tempFahr >= 54 && tempFahr <= 70){
    result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and a jacket.";
  }  else if (eventType == "semi-formal" && tempFahr > 70 ){
    result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and no jacket.";
  }
  if (eventType == "formal" && tempFahr < 54){
    result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and a coat.";
  } else if (eventType == "formal" && tempFahr >= 54 && tempFahr <= 70){
    result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and a jacket.";
  }  else if (eventType == "formal" && tempFahr > 70 ){
    result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and no jacket.";
  }
console.log(result);
// document.getElementById("suggest").innerHTML = result;
}
