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