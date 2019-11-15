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
  var createHiss = document.getElementById("createHis");
  createHiss.addEventListener("click", createHistory);
  var createHiss = document.getElementById("coppyHistory");
  createHiss.addEventListener("click", copyClipBoad);
}, false);

function rental() {
  blankForm(1);
  choice1();
}

function visit() {
  blankForm(2);
  choice2();
}

function rentalVisit() {
  blankForm(3);
  choice2();
  choice1();
}

function changeRooter() {
  blankForm(4);
  choice4();
}

function cancel() {
  blankForm(5);
  choice5();
}

function other() {
  blankForm(6);
  choice6();
}