//nameでvalueを取得
let history = [];

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


const push_history = target_lib => {
  for (i = 0, d = target_lib.length; i < d; i++) {
    if (target_lib[i][type] == 'text') {
      history[i] = document.getElementById(target_lib[i][id]).value;
    } else if (target_lib[i][type] == 'radio') {
      let target_name = document.getElementsByName(target_lib[i][name]);
      if (target_name.checked) {
        history[i] = target_name.value;
      }
    }
  }
}