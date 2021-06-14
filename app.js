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
function opr(val){
  var opt = document.getElementById('result');
  opt.value += val;
  var n = opt.value;
  // console.log(n);
  for (var i = 0; i < n.length; i++) {
    if (n.slice(i, i + 2) === "++" || n.slice(i, i + 2) === "-+" || n.slice(i, i + 2) === "*+" || n.slice(i, i + 2) === "/+" ) {
      n = n.slice(0, i) + "+";
    }
    else if (n.slice(i, i + 2) === "--" || n.slice(i, i + 2) === "*-" || n.slice(i, i + 2) === "/-" || n.slice(i, i + 2) === "+-" ) {
      n = n.slice(0, i) + "-";
    }
    else if (n.slice(i, i + 2) === "**" || n.slice(i, i + 2) === "+*" || n.slice(i, i + 2) === "/*" || n.slice(i, i + 2) === "-*" ) {
      n = n.slice(0, i) + "*";
    }
    else if (n.slice(i, i + 2) === "//" || n.slice(i, i + 2) === "*/" || n.slice(i, i + 2) === "-/" || n.slice(i, i + 2) === "+/" ) {
      n = n.slice(0, i) + "/";
    }
    
    document.getElementById('result').value = n;
  }
}
// Displays entered value on screen.
  function display(value) {
    let res = document.getElementById("result");
    res.value += value;
  }