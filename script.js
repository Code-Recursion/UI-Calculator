var input = document.getElementById("display");

//script to detect if enter button is clicked to evaluate the result

input.addEventListener("keyup", function (event) {

  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode == 13) {

    // Trigger the button element with a click

    document.getElementById("equal").click();
  }
});
var count = 0;
// Function to display the result
function display(result) {
  // code for erase the screen when you click the number key without click on clear button
  if (result == '/' || result == '+' || result == '-' || result == '*' || result == '%') {
    count = 0;
  }
  else if (count != 0) {
    input.value = "";
  }
  input.value += result
}
// Function to clear the screen
function erase() {
  var arr = input.value.split(''), temp = "";
  for (let i = 0; i < arr.length - 1; ++i)
    temp += arr[i];
  input.value = temp;
}
// Function to calculate the result
function calculate() {
  let result;
  operation = input.value;
  try {
    result = eval(operation);
  } catch (error) { }
  // check wheather there is input or not
  if (input.value == "") {
    alert("please enter number ");
  }
  else if (result === 0 || isFinite(result) && Boolean(result)) {
    input.value = result;
    count++;
  }
  else {
    input.value = 'Invalid operation';
    count++;
  }
} 