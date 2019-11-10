function createHistory() {
  switch (flag) {
    case 1:
      historyPatarn1();
      histryChk();
      console.log("1だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    case 2:
      historyPatarn2();
      histryChk();
      console.log("2だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    case 3:
      historyPatarn1();
      historyPatarn2();
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

function historyPatarn1() {
  getTxt("memoBox", 0);
  getRadioValue("payment", 4);
  getRadioValue("after", 5);
  getRadioValue("send", 6);
  getRadioValue("sending", 7);
  getRadioValue("caution", 8);
}

function historyPatarn2() {
  getTxt("memoBox", 0);
  getTxt("tel", 1);
  if (hLogs[1] != "") {
    hLogs[1] = "連絡先：" + hLogs[1];
  }
  getTxt("cal", 2);
  if (document.getElementById("caLabel") != null) {
    hLogs[2] = "連絡希望日　" + hLogs[2];
  } else {
    hLogs[2] = "連絡希望日時　なし";
  }
  getTxt("timeSelect", 3);
  if (document.getElementById("timeSelect") != null) {
    hLogs[3] = "連絡希望時間　" + hLogs[3] + "頃";
  } else {
    hLogs[3] = "";
  }
}