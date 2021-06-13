// Clears Screen
function clearScreen() {
    document.getElementById("result").value = "";
  }
// back space or del button
function del(){
  var str= document.getElementById("result").value;
  str = str.slice(0,str.length-1);
  document.getElementById("result").value = str;
}
// operator control



// Displays entered value on screen.
  function display(value) {
    let res = document.getElementById("result");
    res.value += value;
  }