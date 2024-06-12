let display = document.getElementById("display");

function showToDisplay(input) {
  if(display.value === "Error") {
    clearDisplay();
  }
    display.value += input;
}

function clearDisplay() {
  display.value = '';
}
function calculate() {
  displayValue = display.value;
  if(displayValue === "") {
    return; 
  }
  if(displayValue.match('&#xD7')) {
    console.log(displayValue.match());
    //displayValue = '*';
  }
  
  try{
    console.log(displayValue);
    displayValue = eval(displayValue);
    
  }
  catch(error) {
    displayValue = "Error";
  }
}
