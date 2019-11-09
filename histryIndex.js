function createHistory() {
  switch (flag) {
    case 1:
      getTxt("memoBox", 0);
      getRadioValue("payment", 1);
      getRadioValue("after", 2);
      getRadioValue("send", 3);
      getRadioValue("sending", 4);
      getRadioValue("caution", 5);
      histryChk();
      console.log("1だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    case 2:
      getTxt("memoBox", 0);
      getTxt("cal", 1);
      getTxt("timeSelect", 2);
      getTxt("tel", 3);
      histryChk();
      console.log("2だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    case 3:
      getTxt("memoBox", 0);
      getTxt("cal", 1);
      getTxt("timeSelect", 2);
      getTxt("tel", 3);
      getTxt("memoBox", 4);
      getRadioValue("payment", 5);
      getRadioValue("after", 6);
      getRadioValue("send", 7);
      getRadioValue("sending", 8);
      getRadioValue("caution", 9);
      histryChk();
      console.log("3だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    case 4:
      getTxt("memoBox", 0);
      getTxt("changing", 1);
      histryChk();
      console.log("4だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    case 5:
      getTxt("memoBox", 0);
      histryChk();
      console.log("5だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    case 6:
      getTxt("memoBox", 0);
      getRadioValue("others", 1);
      histryChk();
      console.log("6だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    default:
      console.log("違うよ");
  }
}