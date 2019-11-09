function choice1() {
  createBtn("radio", "payment", "pay1", "phone", "", "phoneのテキスト");
  createBtn("radio", "payment", "pay2", "card", "", "cardのテキスト");
  createBtn("radio", "payment", "pay3", "bank", "", "bankのテキスト");
  createBr("target");
  createBtn("radio", "after", "afterY", "あり", "", "ありテキスト");
  createBtn("radio", "after", "afterN", "なし", "", "なしテキスト");
  createBr("target");
  createBtn("radio", "send", "send", "送る", "", "送るテキスト");
  createBtn("radio", "send", "sendPu", "送るる", "", "送るるテキスト");
  createBr("target");
  createBtn("checkbox", "sending", "sending", "送るとき", "", "送るときテキスト");
  createBr("target");
  createBtn("checkbox", "caution", "caution", "注意", "", "注意テキスト");
  createBr("target");
}

function choice2() {
  createBtn("checkbox", "homeDate", "homeDate", "連絡希望有り", "getHome()", "希望有");
  createBr("target");
}

function getHome() {
  var chkHope = document.getElementById("homeDate");
  if (chkHope.checked == true) {
    if (document.getElementById("caLabel") == null) {
      createCal();
      selectTime();
      createBr("target");
      createTxtBox("tel", "tel", "TEL:xxx-xxxx-xxxx");
      createBr("target");
    }
  }
}

function choice4() {
  var target = document.getElementById("target");
  target.innerHTML = "<p>交換対応について</p>";
  createBtn("checkbox", "changing", "changing", "交換OK", "", "交換OKテキスト");
  createBr("target");

}

function choice5() {
  var target = document.getElementById("target");
  target.innerHTML = "<p>解約について</p>";
}

function choice6() {
  createBtn("radio", "others", "otherSms", "SMS", "", "SMSテキスト");
  createBr("target");
  createBtn("radio", "others", "otherCos", "Cos", "", "Cosテキスト");
  createBr("target");
  createBtn("radio", "others", "otherTec", "Tec", "", "Tecテキスト");
  createBr("target");
  createBtn("radio", "others", "otherEle", "Ele", "", "Eleテキスト");
  createBr("target");
}