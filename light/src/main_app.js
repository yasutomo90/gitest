const model_lib = ['--', 'PR', 'RT', 'RV', 'RX'];
const PR_model = ['---', '100', '200', '300', '400'];
const RT_model = ['---', '200', '200', '300', '400'];
const RV_model = ['---', '300', '200', '300', '400'];
const RX_model = ['---', '400', '200', '300', '400'];

let obj_value = '';
let sub_object_value = '';

let history = [];

window.addEventListener('load', () => {
  select_create(model_lib, 'farst_model_name');
  create_form('farst_form', farst_lib);
  create_form('second_form', second_lib);
  document.getElementById('farst_model_name').addEventListener('change', change_select, false);
  document.getElementById('second_model_name').addEventListener('change', change_model, false);


}, false);

document.getElementById('create_btn').addEventListener('click', () => { name_get_value() }, false);
document.getElementById('chk_optical_call').addEventListener('change', () => { check_box_chk('chk_optical_call') }, false);
document.getElementById('chk_failure').addEventListener('change', () => { check_box_chk('chk_failure') }, false);

//nameでvalueを取得
const name_get_value = () => {
  for (i = 0, d = all_name_lib.length; i < d; i++) {
    getting_log = document.getElementsByName(all_name_lib[i]);
    for (j = 0, dd = getting_log.length; j < dd; j++) {
      if (dd == 1) {
        console.log('とった');
        history[i] = getting_log[j].value;
      } else if (getting_log[j].checked) {
        console.log("チェック");
        history[i] = getting_log[j].value;
      }
    }
  }
  //join
}