var input = document.getElementById("display");

//script to detect if enter button is clicked to evaluate the result

input.addEventListener("keyup", function(event) {
  
    // Number 13 is the "Enter" key on the keyboard
  
    if (event.keyCode == 13) {
    
      // Trigger the button element with a click
      
      document.getElementById("equal").click();
  }
});

//COde for handling equal to button
function handlesubmit(value) {
  let split = value.split('/')
  if(split[split.length -1] == "0"){
    document.getElementById('display').value ='' //This will clear out the display
    return alert("Invalid operation! Cannot Divide by zero")   //This shows an error prompt
  }

  document.getElementById('display').value = eval(value)
}