function createCal() {
    var caLabel = document.createElement("laebel");
    caLabel.setAttribute("class", "calBox");
    caLabel.setAttribute("id", "caLabel");
    var tango = document.getElementById("target");
    tango.appendChild(caLabel);
    var calInput = document.createElement("input");
    calInput.setAttribute("type", "date");
    calInput.setAttribute("name", "cal");
    calInput.setAttribute("id", "cal");
    var tango2 = document.getElementById("caLabel");
    tango2.appendChild(calInput);
    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0" + (today.getMonth() + 1)).slice(-2);
    var dd = ("0" + today.getDate()).slice(-2);
    document.getElementById("cal").value = yyyy + '-' + mm + '-' + dd;
}