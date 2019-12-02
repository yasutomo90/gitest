function getValue() {
  //ラジオボタンの項目すべてのname値を指定
  var radioButton = ["time", "satisfaction"];

  //ラジオボタンの項目の数だけループ…i<xのxは項目の数を指定（以下のチェックボックスも同様）
  for (var i = 0; i < 2; i++) {
    var radios = document.getElementsByName(radioButton[i]);
    radioButton[i] = "";

    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        radioButton[i] = radios[j].value;
        break;
      }
    }
  }

  //格納した値に文章を加えながら１つの変数にまとめる
  var sentence;
  if (radioButton[0] != "") {
    sentence = radioButton[0] + "ごはんに";
  }
  if (checkBox[0] != "") {
    sentence = sentence + checkBox[0] + "を食べました。";
  }
  if (checkBox[1] != "") {
    if (checkBox[0] != "") {
      sentence = sentence + "それから";
    }
    sentence = sentence + checkBox[1] + "を飲みました。";
  }
  if (radioButton[1] != "") {
    sentence = sentence + radioButton[1];
  }
  //まとめた文章をテキストエリアに表示
  document.getElementById("sentenceArea").value = sentence;
}

//入力された内容をすべてクリア
function clearContent() {
  var ElementsCount = document.sentenceForm.elements.length;
  for (i = 0; i < ElementsCount; i++) {
    document.sentenceForm.elements[i].checked = false;
  }
  document.getElementById("sentenceArea").value = "";
}

//textboxの値を調査

function onButtonClick() {
  target = document.getElementById("output");
  target.innerText = document.forms.id_form1.id_textBox1.value;
  //target.innerText = document.id_form1.id_textBox1.value;//これでもOK
}