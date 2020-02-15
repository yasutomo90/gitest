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

let crear_button = document.getElementById("crear");

window.addEventListener("load", () => {
  //HTMLの読み込みが終わってから実行するやーつ
  create_test_elem();
  crear_button.addEventListener("click", reset_form);
}, false);

//要素のリセット
let reset_form = () => {
  //(変数 in オブジェクト)
  for (key in id_value) {
    let clear_tango = document.getElementById(key);
    clear_tango.value = "";
  }

  //for(変数 of 配列) DOMも取得できる
  for (const element of document.getElementsByName("tee")) {
    element.checked = false;
  }
  clear_tango = document.getElementById("test_text");
  clear_tango.value = "";
}

//テキストボックスの自動生成
let create_test_elem = () => {
  let target = document.getElementById("left");
  for (key in id_value) {
    let div = document.createElement("div");
    let input = document.createElement("input");
    let label = document.createElement("label");
    div.setAttribute("class", "input_form");
    input.setAttribute("type", "text");
    input.setAttribute("id", key);
    input.setAttribute("required", "");
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