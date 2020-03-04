const model_lib = ["--", "PR", "RT", "RV", "RX"];
const PR_model = ["---", "100", "200", "300", "400"];
const RT_model = ["---", "200", "200", "300", "400"];
const RV_model = ["---", "300", "200", "300", "400"];
const RX_model = ["---", "400", "200", "300", "400"];
const main_model = "";
const sub_model = "";

let histry = [];

let flag_log = "";

// const power = ["点灯", "消灯"];
// const ararm = ["消灯", "赤灯"];
// const ppp = ["点灯", "消灯", "橙"];
// const light_tel = ["点灯", "点滅", "消灯"];
// const act = ["点灯", "点滅", "消灯"];

// let pr_rooter = [power, ararm, ppp, light_tel, act];
// const pr_rooter = {
//   "power": power,
//   "ararm": ararm,
//   "ppp": ppp,
//   "light_tel": light_tel,
//   "act": act
// };
//radioのid用配列と点灯パターンの配列を用意して必要なやつうをドッキング
//もしくは多次元配列にしていい感じにPPPとかとか

window.addEventListener("load", () => {
  //HTMLの読み込みが終わってから実行するやーつ
  select_create(model_lib, "main_select");
  document.getElementById("check1").addEventListener("change", check_chk);
  //  document.getElementById("create_btn").addEventListener("click", his_log);
}, false);

//option-create
const select_create = (lib, target) => {
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
const radio_create = target => {
  document.getElementById("radio_area").innerHTML = "";
  for (key1 in target) {
    for (key2 in target[key1]) {
      let input_radio = document.getElementById("radio_area");
      let form = document.createElement("form");
      let p = document.createElement("p");
      p.innerHTML = key2;
      form.appendChild(p);
      for (j = 0, dd = target[key1][key2].length; j < dd; j++) {
        let radio = document.createElement("input");
        let label = document.createElement("label");
        radio.type = "radio";
        radio.name = key1;
        radio.id = key1 + j;
        radio.value = target[key1][key2][j];
        label.htmlFor = key1 + j;
        label.innerText = target[key1][key2][j];
        form.appendChild(radio);
        form.appendChild(label);
      }
      input_radio.appendChild(form);
    }
  }
}



//機種の頭文字２つのあたいによってかわるやーつ
const change_select = tango_obj => {
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

const change_model = tango_sub_obj => {
  var sub_object_value = tango_sub_obj.value;
  switch (sub_object_value) {
    case "100":
      console.log("test1");
      radio_create(pr600_ki);
      break;

    case "200":
      console.log("test2");
      radio_create(pr_rooter);
      break;

    case "300":
      console.log("test3");
      radio_create(pr600_ki);
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

// const his_log = () => {
//   let j = 0;
//   for (key in pr_rooter) {
//     let chk_name = document.getElementsByName(key);
//     for (i = 0, d = chk_name.length; i < d; i++) {
//       if (chk_name[i].checked) {
//         histry[j] = chk_name[i].value;
//         j++;
//       }
//     }
//   }
//   document.getElementById("log").value = histry;
// }

// const his_log = () => {
//   for (i = 0, d = hlogs_key.length; i < d; i++) {
//     let chk_name = document.getElementsByName(hlogs_key[i]);
//     for (j = 0, dd = chk_name.length; j < dd; j++) {
//       if (chk_name[j].checked) {
//         histry[i] = chk_name[j].value;
//       }
//     }
//     //ログのチェックのやつ
//     const histry_ex = histry.join("\n");
//     document.getElementById("log").value = histry_ex;
//   }
// }





const check_chk = () => {
  let chk_box = document.getElementById("check1");
  if (chk_box.checked) {
    console.log("check");
    create_radios();

  } else {
    console.log("no-check");
  }
}



const create_radios = () => {
  let p_s = document.createElement("p");
  p_s.text = "testradios";
  let radios = document.createElement("input");
  radios.type = "radio";
  radios.name = "radios_name";
  radios.id = "radios_name" + "_ok";
  let labels = document.createElement("label");
  labels.htmlFor = "radios_name" + "_ok";
  let targets = document.getElementById("radios");
  targets.appendChild(p_s);
  targets.appendChild(radios);
  targets.appendChild(labels);
}