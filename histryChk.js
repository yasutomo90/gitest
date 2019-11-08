function histryChk() {
    var j = 0;
    for (var i = 0; i < hLogs.length; i++) {
        if (hLogs[i] != "") {
            hLogEx[j] = hLogs[i];
            j++;
        }
    }
}