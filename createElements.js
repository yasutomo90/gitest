function blankForm(fragment) {
  var blankForm = document.getElementById("target");
  var eraseMemo = document.getElementById("memoBox");
  var rightTxt = document.getElementById("rightContent");
  rightTxt.innerHTML = "サイドのやつだよ";
  blankForm.innerHTML = "";
  eraseMemo.value = "";
  hLogs = [];
  flag = fragment;
  histryChk();
}

function allReset() {
  var ElementsCount = document.getElementsByName("form1");
  for (i = 0; i < ElementsCount.length; i++) {
    ElementsCount[i].checked = false;
  }
  blankForm(0);
}

function createBtn(btnType, targets, radioName, radioId, displayName, clickOn, radioValue) {
  var input = document.createElement("input");
  input.setAttribute("type", btnType);
  input.setAttribute("name", radioName);
  input.setAttribute("id", radioId);
  input.setAttribute("value", radioValue);
  input.setAttribute("onclick", clickOn);
  var label = document.createElement("label");
  label.setAttribute("name", radioName);
  label.setAttribute("for", radioId);
  label.setAttribute("class", "labeling");
  label.innerHTML = displayName;
  var target = document.getElementById(targets);
  target.appendChild(input);
  target.appendChild(label);
}

function createBr(targetId) {
  var br = document.createElement("br");
  var targetBr = document.getElementById(targetId);
  targetBr.appendChild(br);
}

function createCal(targetId) {
  var caLabel = document.createElement("laebel");
  caLabel.setAttribute("class", "calBox");
  caLabel.setAttribute("id", "caLabel");
  var tango = document.getElementById(targetId);
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

function createTxtBox(boxType, txtId, targetId, boxName, boxValue) {
  var caLabel = document.createElement("laebel");
  caLabel.setAttribute("class", "calBox");
  caLabel.setAttribute("id", txtId);
  var tango = document.getElementById(targetId);
  tango.appendChild(caLabel);
  var TxtBox = document.createElement("input");
  TxtBox.setAttribute("type", boxType);
  TxtBox.setAttribute("name", boxName);
  TxtBox.setAttribute("id", boxName);
  TxtBox.setAttribute("placeholder", boxValue);
  var tang = document.getElementById(txtId);
  tang.appendChild(TxtBox);
}

function copyClipBoad() {
  var copyText = document.getElementById("sentenceArea");
  copyText.select();
  document.execCommand("copy");
}

function createForm(targetId, formId) {
  var homeForm = document.createElement("form");
  homeForm.setAttribute("id", formId);
  var target = document.getElementById(targetId);
  target.appendChild(homeForm);
}

function selectTime(targetId) {
  var timeSelect = document.createElement("select");
  timeSelect.setAttribute("id", "timeSelect");
  timeSelect.setAttribute("name", "timeSelect");
  var target = document.getElementById(targetId);
  target.appendChild(timeSelect);
  tango = document.getElementById("timeSelect");
  for (i = 9; i < 22; i++) {
    var tomeOption = document.createElement("option");
    var k = ("0" + i).slice(-2);
    var x = k + "：00";
    tomeOption.setAttribute("value", x);
    tomeOption.innerHTML = x;
    tango.appendChild(tomeOption);
  }
}