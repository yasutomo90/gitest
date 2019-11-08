//document.getElementById("cal").onchange =
function getdates() {
  var date = document.getElementById("cal").value;
  var tango = document.getElementById("target");
  tango.innerText = date;
}