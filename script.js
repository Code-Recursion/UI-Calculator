var input = document.getElementById("display");

//script to detect if enter button is clicked to evaluate the result

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode == 13) {
      // Trigger the button element with a click
      document.getElementById("equal").click();
  }
});

function calculate(){
  let data = document.getElementById('display').value;

  if (data.substr(-2)=="/0" || data.substr(-3)=="/00"){
    document.getElementById('display').value = "Invalid";
    setTimeout(()=>{
      document.getElementById('display').value = "";
      console.error("divide by 0 not allowed");
    },500);
  }else{
    document.getElementById('display').value = eval(data);
  }
}