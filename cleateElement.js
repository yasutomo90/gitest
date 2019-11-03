function createRadio(targetId, radioName, radioId, radioValue) {
  var input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("name", radioName);
  input.setAttribute("id", radioId);
  input.setAttribute("value", radioValue);
  var label = document.createElement("label");
  label.setAttribute("name", radioName);
  label.setAttribute("for", radioName);
  label.innerHTML = radioValue;
  var target = document.getElementById(targetId);
  target.appendChild(input);
  target.appendChild(label);
  target.appendChild("<br>");
}
