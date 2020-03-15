let history = [];
let his_ex = [];
//getヒストリー
const push_history = target_lib => {
  for (i = 0, d = target_lib.length; i < d; i++) {
    if (target_lib[i]['type'] == 'text') {
      let temp_id = document.getElementById(target_lib[i]['id']);
      let temp = temp_id.value;
      history.push(temp);
    } else if (target_lib[i]['type'] == 'radio') {
      let target_name = document.getElementsByName(target_lib[i]['name']);
      for (j = 0, d = target_name.length; j < d; j++) {
        if (target_name[j].checked) {
          let temp = target_name[j].value;
          history.push(temp);
        };
      };
    };
  };
};

const get_history = () => {
  history = [];
  his_ex = [];
  push_history(farst_lib);
  history.push(obj_value);
  push_history(second_lib);
  push_history(all_lamp);
  let chk_optical = document.getElementById('chk_optical_call');
  if (chk_optical.checked) {
    push_history(optical);
  };
  let chk_fault = document.getElementById('chk_failure');
  if (chk_fault.checked) {
    push_history(fault);
  };
  history_format();
};

const history_format = () => {
  j = 0;
  for (i = 0, d = history.length; i < d; i++) {
    if (history[i]) {
      his_ex[j] = history[i];
      j++;
    };
  };
  let target = document.getElementById('log');
  target.value = his_ex.join('\r\n');
};