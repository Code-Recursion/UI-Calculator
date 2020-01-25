var input = document.getElementById("display");

//script to detect if enter button is clicked to evaluate the result

input.addEventListener("keyup", function(event) {
  
    // Number 13 is the "Enter" key on the keyboard
  
    if (event.keyCode == 13) {
    
      // Trigger the button element with a click
      
      document.getElementById("equal").click();
  }
});