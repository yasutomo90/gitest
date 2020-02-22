let model_lib = ["--", "PR", "RT", "RV", "RX"];
let PR_model = ["---", "100", "200", "300", "400"];
let RT_model = ["---", "200", "200", "300", "400"];
let RV_model = ["---", "300", "200", "300", "400"];
let RX_model = ["---", "400", "200", "300", "400"];
let main_model = "";
let sub_model = "";

let histry = [];

let power = ["点灯", "消灯"];
let ararm = ["消灯", "赤灯"];
let ppp = ["点灯", "消灯", "橙"];
let light_tel = ["点灯", "点滅", "消灯"];
let act = ["点灯", "点滅", "消灯"];

// let pr_rooter = [power, ararm, ppp, light_tel, act];
let pr_rooter = {
  "power": power,
  "ararm": ararm,
  "ppp": ppp,
  "light_tel": light_tel,
  "act": act
};
//radioのid用配列と点灯パターンの配列を用意して必要なやつうをドッキング
//もしくは多次元配列にしていい感じにPPPとかとか

window.addEventListener("load", () => {
  //HTMLの読み込みが終わってから実行するやーつ
  select_create(model_lib, "main_select");
  document.getElementById("create_btn").addEventListener("click", his_log);
}, false);

//option-create
let select_create = (lib, target) => {
  var tango = document.getElementById(target);
  while (tango.lastChild) {
    tango.removeChild(tango.lastChild);
  }
  for (i = 0, j = lib.length; i < j; i++) {
    let op = document.createElement("option");
    op.value = lib[i];
    op.text = lib[i];
    tango.appendChild(op);
  }
}

//adio-creaete
let radio_create = target => {
  // var tango = document.getElementById(target);
  // while (tango.lastChild) {
  //   tango.removeChild(tango.lastChild);
  // }
  for (key in target) {
    console.log(key);
    let input_radio = document.getElementById("radio_area");
    let form = document.createElement("form");
    for (j = 0, dd = target[key].length; j < dd; j++) {
      console.log(target[key][j]);
      let radio = document.createElement("input");
      let label = document.createElement("label");
      radio.type = "radio";
      radio.name = key;
      radio.id = key + j;
      radio.value = target[key][j];
      label.htmlFor = key + j;
      label.innerText = target[key][j];
      form.appendChild(radio);
      form.appendChild(label);
    }
    input_radio.appendChild(form);
  }
}



//機種の頭文字２つのあたいによってかわるやーつ
let change_select = tango_obj => {
  var obj_value = tango_obj.value;
  switch (obj_value) {
    case "PR":
      select_create(PR_model, "sub_select");
      break;

    case "RT":
      select_create(RT_model, "sub_select");
      break;

    case "RV":
      select_create(RV_model, "sub_select");
      break;

    case "RX":
      select_create(RX_model, "sub_select");
      break;

    default:
      console.log("default");
      break;
  }
}

let change_model = tango_sub_obj => {
  var sub_object_value = tango_sub_obj.value;
  switch (sub_object_value) {
    case "100":
      console.log("test1");
      radio_create(pr_rooter);
      break;

    case "200":
      console.log("test2");
      radio_create(pr_rooter);
      break;

    case "300":
      console.log("test3");
      radio_create(pr_rooter);
      break;

    case "400":
      console.log("test4");
      radio_create(pr_rooter);
      break;

    default:
      console.log("default");
      break;
  }
}

let his_log = () => {
  let j = 0;
  for (key in pr_rooter) {
    let chk_name = document.getElementsByName(key);
    for (i = 0, d = chk_name.length; i < d; i++) {
      if (chk_name[i].checked) {
        histry[j] = chk_name[i].value;
        j++;
      }
    }
  }
  document.getElementById("log").value = histry;
}