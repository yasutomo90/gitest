function getRadioValue(name, j) {
  //ラジオボタンオブジェクトを取得する
  var radios = document.getElementsByName(name);

  //取得したラジオボタンオブジェクトから選択されたものを探し出す
  var result;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      //選択されたラジオボタンのvalue値を取得する
      result = radios[i].value;
      break;
    }
  }
  //value値を表示する
  //document.getElementById("result").innerHTML = result;
  history[j] = result;
}

//date型の値を取得
//document.getElementById("cal").onchange = function () {
//  var date = document.getElementById("cal").value;
//};