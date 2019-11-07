var Histry = [];
var flag = 0;

document.addEventListener("DOMContentLoaded", function () {
  var rent = document.getElementById("btn1");
  rent.addEventListener("click", radio1);
}, false);

function radio1() {
  var target = document.getElementById("target");
  target.innerHTML = "";
  createBtn("radio", "payment", "pay1", "phone");
  createBtn("radio", "payment", "pay2", "card");
  createBtn("radio", "payment", "pay3", "bank");
  createBr("target");
  createBtn("radio", "after", "afterY", "yes");
  createBtn("radio", "after", "afterN", "no");
  createBr("target");
  createBtn("checkbox", "send", "send", "send");
  createBr("target");
  createBtn("checkbox", "caution", "caution", "caution");
}