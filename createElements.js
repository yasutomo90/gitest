function blankForm(fragment) {
  var blankForm = document.getElementById("target");
  blankForm.innerHTML = "";
  history = [];
  flag = fragment;
}
function createBtn(btnType, radioName, radioId, radioValue) {
  var input = document.createElement("input");
  input.setAttribute("type", btnType);
  input.setAttribute("name", radioName);
  input.setAttribute("id", radioId);
  input.setAttribute("value", radioValue);
  var label = document.createElement("label");
  label.setAttribute("name", radioName);
  label.setAttribute("for", radioId);
  label.innerHTML = radioValue;
  var target = document.getElementById("target");
  target.appendChild(input);
  target.appendChild(label);
}
function createBr(targetId) {
  var br = document.createElement("br");
  var targetBr = document.getElementById(targetId);
  targetBr.appendChild(br);
}
function createCal() {
  var caLabel = document.createElement("laebel");
  caLabel.setAttribute("class", "calBox");
  caLabel.setAttribute("id", "caLabel");
  var tango = document.getElementById("target");
  tango.appendChild(caLabel);
  var calInput = document.createElement("input");
  calInput.setAttribute("type", "date");
  calInput.setAttribute("name", "cal");
  calInput.setAttribute("id", "cal");
  var tango2 = document.getElementById("caLabel");
  tango2.appendChild(calInput);
  var today = new Date();
  today.setDate(today.getDate());
  var yyyy = today.getFullYear();
  var mm = ("0" + (today.getMonth() + 1)).slice(-2);
  var dd = ("0" + today.getDate()).slice(-2);
  document.getElementById("cal").value = yyyy + '-' + mm + '-' + dd;
}
function createTxtBox(boxType, boxName) {
  var br = document.createElement("br");
  var caLabel = document.createElement("laebel");
  caLabel.setAttribute("class", "calBox");
  caLabel.setAttribute("id", "txtLabel");
  var tango = document.getElementById("target");
  tango.appendChild(br);
  tango.appendChild(caLabel);
  var TxtBox = document.createElement("input");
  TxtBox.setAttribute("type", boxType);
  TxtBox.setAttribute("name", boxName);
  TxtBox.setAttribute("id", boxName);
  var tang = document.getElementById("txtLabel");
  tang.appendChild(TxtBox);
}