function createRightTxt(tetext) {
    var target = document.getElementById("rightContent");
    target.innerHTML = "";
    var p = document.createElement("p");
    p.innerText = tetext;
    target.appendChild(p);
}