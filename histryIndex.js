function createHistory() {
  switch (flag) {
    case 1:
      getTxt("memoBox", 0);
      getRadioValue("payment", 1);
      getRadioValue("after", 2);
      getRadioValue("send", 3);
      getRadioValue("caution", 4);
      console.log("1だよ");
      console.log(hLogs.join("\r\n"));
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