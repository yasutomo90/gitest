function selectTime() {
    var timeSelect = document.createElement("select");
    timeSelect.setAttribute("id", "timeSelect");
    timeSelect.setAttribute("name", "timeSelect");
    var target = document.getElementById("target");
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