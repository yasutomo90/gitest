let id_value = {
  "test1": "testいち",
  "test2": "testにー",
  "test3": "testさん",
  "test4": "testしー",
  "test5": "testごー",
  "test6": "testろく",
  "test7": "testなな",
  "test8": "testはち",
  "test9": "testくー"
};

window.addEventListener("load", () => {
  //
  create_test_elem();
}, false);


let create_test_elem = () => {

  let target = document.getElementById("left");

  for (key in id_value) {
    let div = document.createElement("div");
    let input = document.createElement("input");
    let label = document.createElement("label");

    div.setAttribute("class", "input_form");
    input.setAttribute("type", "text");
    input.setAttribute("id", key);
    input.setAttribute("value", '');
    label.setAttribute("for", key);
    label.innerHTML = id_value[key];
    div.appendChild(input);
    div.appendChild(label);
    target.appendChild(div);
    div = "";
    input = "";
    label = "";
  }
}