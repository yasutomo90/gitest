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

//機種のチェック
const change_select = () => {
  obj_value = document.getElementById('farst_model_name').value;
  switch (obj_value) {
    case 'PR':
      select_create(PR_model, 'second_model_name');
      break;

    case 'RT':
      select_create(RT_model, 'second_model_name');
      break;

    case 'RV':
      select_create(RV_model, 'second_model_name');
      break;

    case 'RX':
      select_create(RX_model, 'second_model_name');
      break;

    default:
      console.log('default');
      break;
  }
}

//型番のチェック
const change_model = () => {
  sub_object_value = document.getElementById('second_model_name').value;
  switch (sub_object_value) {
    case '100':
      console.log('test1');
      document.getElementById('radio_area').innerHTML = '';
      create_form('radio_area', pr600_ki);
      break;

    case '200':
      console.log('test2');
      document.getElementById('radio_area').innerHTML = '';
      create_form('radio_area', pr600_ki);
      break;

    case '300':
      console.log('test3');
      document.getElementById('radio_area').innerHTML = '';
      create_form('radio_area', pr600_ki);
      break;

    case '400':
      console.log('test4');
      document.getElementById('radio_area').innerHTML = '';
      create_form('radio_area', pr600_ki);
      break;

    default:
      console.log('default');
      break;
  }
}


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
}