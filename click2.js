function click2() {
    document.getElementById("dti1").innerHTML =
        '<input type="radio" name="PC2" id="PC2" value="PC2" onclick="click3()" /><label for="PC2">PC2</label><div id="PC3"></div>' +
        '<input type="radio" name="PC2" id="PC3" value="PC3" onclick="click3()" /><label for="P3">PC3</label><div id="dti2"></div>';
}

function click3() {
    document.getElementById("dti2").innerHTML =
        '<input type="radio" name="PC2" id="PC2" value="PC2" onclick="click4()" /><label for="PC2">PC2</label><div id="PC3"></div>' +
        '<input type="radio" name="PC2" id="PC3" value="PC3" onclick="click4()" /><label for="P3">PC3</label><div id="PC3"></div>';
}