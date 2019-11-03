var radioBotan, radioName, radioId, radioValue, radioTitle;

function createRadio(radioName) {
  var input = document.createElement("input");
  //input.id = radioId;
  input.value = testValue;
  input.type = "button";
  input.name = radioName;
  //  var label = document.createElement("label");
  //  label.for = raidoId;
  //  label.innerText = radioTitle;
  //  radioBotan = input + label;
  var targetId = document.getElementById("target");
  targetId.appendChild(input);
}
