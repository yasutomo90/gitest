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
  createTxtBox("tel", "telen", "target", "tel", "TEL:xxx-xxxx-xxxx");
  createBr("target");
  createTxtBox("text", "gong", "target", "gog", "gog");
  createBr("target");
  createBtn("checkbox", "homeDate", "homeDate", "連絡希望有り", "getHome()", "希望有");
  createBr("target");
}

function getHome() {
  var chkHope = document.getElementById("homeDate");
  if (chkHope.checked == true) {
    if (document.getElementById("caLabel") == null) {
      createForm("target", "homeForm");
      createCal("homeForm");
      selectTime("homeForm");
      createBr("homeForm");
    }
  } else {
    var elem = document.getElementById("homeForm");
    elem.parentNode.removeChild(elem);
  }
}

function choice4() {
  var target = document.getElementById("target");
  target.innerHTML = "<p>交換対応について</p>";
  createTxtBox("text", "sympy", "target", "symptoms", "症状");
  createBr("target");
  createBtn("radio", "broken", "brokenTec", "テク", "", "テク判定");
  createBtn("radio", "broken", "brokenEle", "エレ", "", "エレ判定");
  createBtn("radio", "broken", "brokenOth", "アザ", "", "アザ判定");
  createBr("target");
  createBtn("checkbox", "changing", "changing", "住所OK", "", "住所OKテキスト");
  createBr("target");
  createBtn("radio", "fare", "fareY", "運賃OK", "", "運賃OKテキスト");
  createBtn("radio", "fare", "fareN", "運賃NG", "", "運賃NGテキスト");
}

function choice5() {
  var target = document.getElementById("target");
  target.innerHTML = "<p>解約について</p>";
  createBtn("checkbox", "changing", "changing", "住所OK", "", "住所OKテキスト");
  createBr("target");
  createBtn("radio", "fare", "fareY", "運賃OK", "", "運賃OKテキスト");
  createBtn("radio", "fare", "fareN", "運賃NG", "", "運賃NGテキスト");
}

function choice6() {
  createBtn("radio", "others", "otherSms", "SMS", "sendSms()", "SMSテキスト");
  createBtn("radio", "others", "otherCos", "Cos", "sendSms()", "Cosテキスト");
  createBtn("radio", "others", "otherTec", "Tec", "sendSms()", "Tecテキスト");
  createBtn("radio", "others", "otherEle", "Ele", "sendSms()", "Eleテキスト");
}

function sendSms() {
  var chkHope = document.getElementById("otherSms");
  if (chkHope.checked == true) {
    if (document.getElementById("caLabel") == null) {
      createForm("target", "homeForm");
      createCal("homeForm");
      var target = document.getElementById("homeForm");
      var b = document.createElement("b");
      b.innerHTML = "：送られた日付";
      target.appendChild(b);
    }
  } else {
    var elem = document.getElementById("homeForm");
    elem.parentNode.removeChild(elem);
  }
}