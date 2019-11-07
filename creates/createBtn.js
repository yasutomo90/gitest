function createBtn(btnType, radioName, radioId, radioValue) {
  var input = document.createElement("input");
  input.setAttribute("type", btnType);
  input.setAttribute("name", radioName);
  input.setAttribute("id", radioId);
  input.setAttribute("value", radioValue);
  var label = document.createElement("label");
  label.setAttribute("name", radioName);
  label.setAttribute("for", radioId);
  label.innerHTML = radioValue;
  var target = document.getElementById("target");
  target.appendChild(input);
  target.appendChild(label);
}
