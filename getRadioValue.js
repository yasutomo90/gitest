function getRadioValue(name, j) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      hLogs[j] = radios[i].value;
      break;
    } else {
      hLogs[j] = "";
    }
  }
}

//date型の値を取得
//document.getElementById("cal").onchange = function () {
//  var date = document.getElementById("cal").value;
//};