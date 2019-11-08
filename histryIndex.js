function createHistory() {
  switch (flag) {
    case 1:
      history = ["null"];
      console.log(history);
      getRadioValue("payment", 1);
      console.log("1だよ");
      var historyLog = ["test", "test"];
      console.log(historyLog);
      var hislog = historyLog.join("\r\n");
      console.log(hislog);
      console.log(history);
      break;
    case 2:
      console.log("2だよ")
      break;
    case 3:
      console.log("3だよ")
      break;
    case 4:
      console.log("4だよ")
      break;
    case 5:
      console.log("5だよ")
      break;
    case 6:
      console.log("6だよ")
      break;
    default:
      console.log("違うよ")
  }
}