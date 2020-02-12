let inputbox_value = ["test1", "test2", "test3", "test4", "test5"];

window.addEventListener("load", function () {
  set_selectbox("target_day1");
  textbox_create();
}, false)


let set_selectbox = target => {
  let target_month = document.getElementById(target);
  for (var i = 9; i <= 19; i++) {
    let opt = document.createElement("option");
    opt.setAttribute = ("value", i);
    opt.innerHTML = i;
    target_month.appendChild(opt);
  }
}

let textbox_create = () => {
  let target = document.getElementById("target_test");
  let div_test = document.createElement("div");
  let input = document.createElement("input");
  let label = document.createElement("label");
  div_test.setAttribute = ("class", "input_form");
  input.setAttribute = ("type", "text");
  input.setAttribute = ("id", "test");
  label.setAttribute = ("for", "test");
  label.innerHTML = "tetestetsetse";
  div_test.appendChild(input);
  div_test.appendChild(label);
  target.appendChild(div_test);
}


//参考
var customers = {
  "田中太郎": "03-53xx-xxxx",
  "田中二郎": "03-54xx-xxxx",
  "田中花子": "03-55xx-xxxx"
};

for (key in customers) {
  alert(key + "さんの番号は、" + customers[key] + "です。");
}