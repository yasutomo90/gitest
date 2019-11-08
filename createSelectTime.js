function selectTime() {
    //var timeIndex = '<select id="selectTime" name="selectTime"><option value="09:00">09：00</option><option value="10:00">10：00</option><option value="11:00">11：00</option><option value="12:00">12：00</option><option value="13:00">13：00</option><option value="14:00">14：00</option><option value="15:00">15：00</option><option value="16:00">16：00</option><option value="17:00">17：00</option><option value="18:00">18：00</option><option value="19:00">19：00</option><option value="20:00">20：00</option><option value="21:00">21：00</option></select>';
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