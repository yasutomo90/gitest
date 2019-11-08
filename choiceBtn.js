function choice1() {
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
  createBr("target");
}

function choice2() {
  createCal();
  createBr("target");
  selectTime();
  createTxtBox("text", "tel");
  createBr("target");
}

function choice4() {
  var target = document.getElementById("target");
  target.innerHTML = "<p>交換対応について</p>";
}

function choice5() {
  var target = document.getElementById("target");
  target.innerHTML = "<p>解約について</p>";
}

function choice6() {
  createBtn("radio", "others", "otherSms", "otherSms");
  createBr("target");
  createBtn("radio", "others", "otherCos", "otherCos");
  createBr("target");
  createBtn("radio", "others", "otherTec", "otherTec");
  createBr("target");
  createBtn("radio", "others", "otherEle", "otherEle");
  createBr("target");
}