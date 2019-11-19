function choice1() {
  createRightTxt("テストテストテストテスト\r\nテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト");
  createBtn("radio", "target", "payment", "pay1", "phone", "", "phoneのテキスト");
  createBtn("radio", "target", "payment", "pay2", "card", "", "cardのテキスト");
  createBtn("radio", "target", "payment", "pay3", "bank", "", "bankのテキスト");
  createBr("target");
  createBtn("radio", "target", "after", "afterY", "あり", "", "ありテキスト");
  createBtn("radio", "target", "after", "afterN", "なし", "", "なしテキスト");
  createBr("target");
  createBtn("radio", "target", "send", "send", "送る", "", "送るテキスト");
  createBtn("radio", "target", "send", "sendPu", "送るる", "", "送るるテキスト");
  createBr("target");
  createBtn("checkbox", "target", "sending", "sending", "送るとき", "", "送るときテキスト");
  createBr("target");
  createBtn("checkbox", "target", "caution", "caution", "注意", "", "注意テキスト");
  createBr("target");
}

function choice2() {
  createForm("target", "homeForm");
  createBtn("checkbox", "homeForm", "homeDate", "homeDate", "連絡希望有り", "getHome()", "希望有");
  createBr("homeForm");
  createTxtBox("tel", "telen", "target", "tel", "TEL:xxx-xxxx-xxxx");
  createBr("target");
  createTxtBox("text", "gong", "target", "gog", "gog");
  createBr("target");
}

function getHome() {
  var chkHope = document.getElementById("homeDate");
  if (chkHope.checked == true) {
    if (document.getElementById("caLabel") == null) {

      createCal("homeForm");
      selectTime("homeForm");
      createBr("homeForm");
    }
  } else {
    var elem = document.getElementById("homeForm");
    //elem.parentNode.removeChild(elem);
    elem.innerHTML = "";
    createBtn("checkbox", "homeForm", "homeDate", "homeDate", "連絡希望有り", "getHome()", "希望有");
    createBr("homeForm");
  }
}

function choice4() {
  var target = document.getElementById("target");
  target.innerHTML = "<p>交換対応について</p>";
  createTxtBox("text", "sympy", "target", "symptoms", "症状");
  createBr("target");
  createBtn("radio", "target", "broken", "brokenTec", "テク", "", "テク判定");
  createBtn("radio", "target", "broken", "brokenEle", "エレ", "", "エレ判定");
  createBtn("radio", "target", "broken", "brokenOth", "アザ", "", "アザ判定");
  createBr("target");
  createBtn("checkbox", "target", "changing", "changing", "住所OK", "", "住所OKテキスト");
  createBr("target");
  createBtn("radio", "target", "fare", "fareY", "運賃OK", "", "運賃OKテキスト");
  createBtn("radio", "target", "fare", "fareN", "運賃NG", "", "運賃NGテキスト");
}

function choice5() {
  var target = document.getElementById("target");
  target.innerHTML = "<p>解約について</p>";
  createBtn("checkbox", "target", "changing", "changing", "住所OK", "", "住所OKテキスト");
  createBr("target");
  createBtn("radio", "target", "fare", "fareY", "運賃OK", "", "運賃OKテキスト");
  createBtn("radio", "target", "fare", "fareN", "運賃NG", "", "運賃NGテキスト");
}

function choice6() {
  createBtn("radio", "target", "others", "otherSms", "SMS", "sendSms()", "SMSテキスト");
  createBtn("radio", "target", "others", "otherCos", "Cos", "sendSms()", "Cosテキスト");
  createBtn("radio", "target", "others", "otherTec", "Tec", "sendSms()", "Tecテキスト");
  createBtn("radio", "target", "others", "otherEle", "Ele", "sendSms()", "Eleテキスト");
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

function createRightTxt(tetext) {
  var target = document.getElementById("rightContent");
  target.innerHTML = "";
  var p = document.createElement("p");
  p.innerText = tetext;
  target.appendChild(p);
}