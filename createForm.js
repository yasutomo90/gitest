var histry = [];
var flag = 0;

document.addEventListener("DOMContentLoaded", function () {
  var rent = document.getElementById("btn1");
  rent.addEventListener("click", rental);
  var vis = document.getElementById("btn2");
  vis.addEventListener("click", visit);
  var renvis = document.getElementById("btn3");
  renvis.addEventListener("click", rentalVisit);
  var chanroo = document.getElementById("btn4");
  chanroo.addEventListener("click", changeRooter);
  var canc = document.getElementById("btn5");
  canc.addEventListener("click", cancel);
  var oth = document.getElementById("btn6");
  oth.addEventListener("click", other);
}, false);

function rental() {
  blankForm(1);
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
  console.log(flag);
}

function visit() {
  blankForm(2);
  var tango = document.getElementById("target");
  tango.innerHTML = '<label class="calBox"> <input type="date" name="cal" id="cal" /></label>';
  console.log(flag);
}

function rentalVisit() {
  blankForm(3);
  console.log(flag);
}

function changeRooter() {
  blankForm(4);
  console.log(flag);
}

function cancel() {
  blankForm(5);
  console.log(flag);
}

function other() {
  blankForm(6);
  console.log(flag);
}