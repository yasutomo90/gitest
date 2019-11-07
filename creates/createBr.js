function createBr(targetId) {
    var br = document.createElement("br");
    var targetBr = document.getElementById(targetId);
    targetBr.appendChild(br);
}