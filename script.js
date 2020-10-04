var input = document.getElementById("display");

//script to detect if enter button is clicked to evaluate the result
input.addEventListener("keyup", function(event) {

  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode == 13) {

    // Trigger the button element with a click
    document.getElementById("equal").click();
  }
});

// Function to handle TextInput
input.addEventListener("keydown", function(event) {

  //Here the timer doesn't work constantly -> That's why the Loop keeps running so long
  let s = event.keyCode
  if (s > 64 && s < 91) {
    for (let i = 0; i < 50; ++i) {
      setTimeout(function() {
        input.value = null;
      }, 0);
    }
  }
});
/*
  //Here it does but signs doesn't work
  //The RegExp for the multKeys is missing. (Shift, Enter, Delete, Left arrow, right arrow...)
  let code = event.code;
  let key = event.key;
  console.log(key);
  let lastValue = code.substr(code.length - 1, );
  //Here you can implement other Keys, if you want
  let singleKeys = /^[%^&*()+\-=\[\]{};:\\|,.<>\/]+$/
  code = singleKeys.test(key);
  console.log(code);

  if (isNaN(lastValue) && !code) {
    setTimeout(function() {
      input.value = null;
    }, 0);
  }
  */

// Function to calculate the result
function calculate(operation) {
  let result;
  try {
    result = eval(operation);
  } catch (error) {
    input.value = "Invalid Input";
  } finally {
    if (result === 0 || isFinite(result) && Boolean(result)) {
      input.value = result;
    } else
      setTimeout(function() {
        input.value = null;
      }, 3000);
  }
}