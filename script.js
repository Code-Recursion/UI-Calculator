var input = document.getElementById('display');

//script to detect if enter button is clicked to evaluate the result
const calc = () => {
  if (eval(display.value) === Infinity) {
    input.value = 'Error';
  } else {
    input.value = eval(display.value);
  }
};

input.addEventListener('keyup', function (event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.key == 'Enter' || event.keyCode == '13') {
    // Trigger the button element with a click
    calc();
  }
});
