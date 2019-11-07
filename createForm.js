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
  choice1();
  console.log(flag);
}

function visit() {
  blankForm(2);
  choice2();
  console.log(flag);
}

function rentalVisit() {
  blankForm(3);
  choice2();
  choice1();
  console.log(flag);
}

function changeRooter() {
  blankForm(4);
  var target = document.getElementById("target");
  target.innerHTML = "<p>交換対応について</p>";
  console.log(flag);
}

function cancel() {
  blankForm(5);
  var target = document.getElementById("target");
  target.innerHTML = "<p>解約について</p>";
  console.log(flag);
}

function other() {
  blankForm(6);
  var target = document.getElementById("target");
  choice6();
  console.log(flag);
}