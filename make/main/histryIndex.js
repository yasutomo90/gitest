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
      getTxt("symptoms", 1);
      getRadioValue("broken", 2);
      getRadioValue("changing", 3);
      getRadioValue("fare", 4);
      histryChk();
      console.log("4だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    case 5:
      getTxt("memoBox", 0);
      hLogs[1] = "解約について";
      getRadioValue("changing", 2);
      getRadioValue("fare", 3);
      histryChk();
      console.log("5だよ");
      console.log(hLogEx.join("\r\n"));
      hLogEx = [];
      break;

    case 6:
      getTxt("memoBox", 0);
      getRadioValue("others", 1);
      getTxt("cal", 2);
      if (document.getElementById("caLabel") != null) {
        hLogs[2] = "送られた日は" + hLogs[2] + "だよ";
      } else {
        hLogs[2] = "";
      }
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
  getRadioValue("payment", 1);
  getRadioValue("after", 2);
  getRadioValue("send", 3);
  getRadioValue("sending", 4);
  getRadioValue("caution", 5);
}

function historyPatarn2() {
  getTxt("memoBox", 0);
  hLogs[6] = "アイムホーム";
  getTxt("tel", 7);
  if (hLogs[7] != "") {
    hLogs[7] = "連絡先：" + hLogs[7];
  }
  getTxt("gog", 8);

  getTxt("cal", 9);
  if (document.getElementById("caLabel") != null) {
    hLogs[9] = "連絡希望日　" + hLogs[9];
  } else {
    hLogs[9] = "連絡希望日時　なし";
  }
  getTxt("timeSelect", 10);
  if (document.getElementById("timeSelect") != null) {
    hLogs[10] = "連絡希望時間　" + hLogs[10] + "頃";
  } else {
    hLogs[10] = "";
  }
}