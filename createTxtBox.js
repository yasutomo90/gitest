function createTxtBox(boxType, boxName) {
    var br = document.createElement("br");
    var caLabel = document.createElement("laebel");
    caLabel.setAttribute("class", "calBox");
    caLabel.setAttribute("id", "txtLabel");
    var tango = document.getElementById("target");
    tango.appendChild(br);
    tango.appendChild(caLabel);
    var TxtBox = document.createElement("input");
    TxtBox.setAttribute("type", boxType);
    TxtBox.setAttribute("name", boxName);
    TxtBox.setAttribute("id", boxName);
    var tang = document.getElementById("txtLabel");
    tang.appendChild(TxtBox);
}