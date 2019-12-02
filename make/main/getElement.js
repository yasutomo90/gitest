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