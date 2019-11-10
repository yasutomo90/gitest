function selectTime(targetId) {
    var timeSelect = document.createElement("select");
    timeSelect.setAttribute("id", "timeSelect");
    timeSelect.setAttribute("name", "timeSelect");
    var target = document.getElementById(targetId);
    target.appendChild(timeSelect);
    tango = document.getElementById("timeSelect");
    for (i = 9; i < 22; i++) {
        var tomeOption = document.createElement("option");
        var k = ("0" + i).slice(-2);
        var x = k + "：00";
        tomeOption.setAttribute("value", x);
        tomeOption.innerHTML = x;
        tango.appendChild(tomeOption);
    }
}

function getdates() {
    var date = document.getElementById("cal").value;
    var tango = document.getElementById("target");
    tango.innerText = date;
}

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

function getTxt(target, j) {
    var tango = document.getElementById(target);
    if (document.getElementById(target) != null) {
        hLogs[j] = tango.value;
    }
}

function histryChk() {
    var j = 0;
    for (var i = 0; i < hLogs.length; i++) {
        if (hLogs[i] != null) {
            if (hLogs[i] != "") {
                hLogEx[j] = hLogs[i];
                j++;
            }
        }
    }
    var target = document.getElementById("historyBox");
    target.value = hLogEx.join("\r\n");
}

function copyClipBoad() {
    var copyText = document.getElementById("historyBox");
    copyText.select();
    document.execCommand("copy");
}