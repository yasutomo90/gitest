var input, label, radioBotan, radioName, radioId, radioValue, radioTitle;
var targetId = document.getElementById("target");
function createRadio() {
  input = document.createElement("input");
  input.id = radioId;
  input.value = radioValue;
  input.type = radio;
  label = document.createElement("label");
  label.for = raidoId;
  label.innerText = radioTitle;
  radioBotan = input + label;
  targetId.appendChild(radioBotan);
}
