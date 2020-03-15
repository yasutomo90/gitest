const model_lib = ['--', 'PR', 'RT', 'RV', 'RX'];
const PR_model = ['---', '100', '200', '300', '400'];
const RT_model = ['---', '200', '200', '300', '400'];
const RV_model = ['---', '300', '200', '300', '400'];
const RX_model = ['---', '400', '200', '300', '400'];

window.addEventListener('load', () => {
  select_create(model_lib, 'farst_model_name');
  create_form('farst_form', farst_lib);
  create_form('second_form', second_lib);
  document.getElementById('farst_model_name').addEventListener('change', change_select, false);
  document.getElementById('second_model_name').addEventListener('change', change_model, false);
}, false);

document.getElementById('create_btn').addEventListener('click', () => { get_history() }, false);
document.getElementById('initialise').addEventListener('click', () => { all_clear() }, false);
document.getElementById('chk_optical_call').addEventListener('change', () => { check_box_chk('chk_optical_call') }, false);
document.getElementById('chk_failure').addEventListener('change', () => { check_box_chk('chk_failure') }, false);


//チェックボックスにチェックが有るか確認
const check_box_chk = target_id => {
  let chk_box = document.getElementById(target_id);
  if (chk_box.checked) {
    if (target_id == 'chk_optical_call') {
      tango = document.getElementById('optical_call');
      create_form('optical_call', optical);
    } else if (target_id == 'chk_failure') {
      tango = document.getElementById('optical_call');
      create_form('failure_area', fault);
    }
  } else {
    console.log('no-check');
    if (target_id == 'chk_optical_call') {
      document.getElementById('optical_call').innerHTML = '';
    } else if (target_id == 'chk_failure') {
      document.getElementById('failure_area').innerHTML = '';
    }
  }
}

//画面更新による初期化
const all_clear = () => {
  window.location.reload();
}