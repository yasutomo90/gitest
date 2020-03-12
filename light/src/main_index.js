//{ type: text, id : id, value : placeholder }
//{ type: radio, label_text: label_text, name : name, id : [id1, id2, id3], value : [value1, value2, value3] }

//テキストboxとラジオの生成
const create_form = (target_id, target_lib) => {
  let target = document.getElementById(target_id);
  for (i = 0, d = target_lib.length; i < d; i++) {

    if (target_lib[i][0] == 'text') {
      let form = document.createElement('form');
      let input = create_textbox(target_lib[i][1], target_lib[i][2]);
      form.appendChild(input);
      target.appendChild(form);

    } else if (target_lib[i][0] == 'radio') {
      let form = document.createElement('form');
      let p = document.createElement('p');
      p.insertAdjacentText('beforeend', target_lib[i][1]);
      form.appendChild(p);
      for (key in target_lib[i][3]) {
        let { input, label } = create_radio(target_lib[i][2], key, target_lib[i][3][key]);
        form.appendChild(input);
        form.appendChild(label);
      }
      target.appendChild(form);
    }
  }
}

const create_former = (target_id, target_lib) => {
  let target = document.getElementById(target_id);
  for (i = 0, d = target_lib.length; i < d; i++) {
    let form = document.createElement('form');

    if (target_lib[i]['type'] == 'text') {
      let input = create_textbox(target_lib[i]['id'], target_lib[i]['value']);
      form.appendChild(input);
      target.appendChild(form);
    } else if (target_lib[i]['type'] == 'radio') {

      let p = document.createElement('p');
      p.insertAdjacentText('beforeend', target_lib[i]['label_text']);
      form.appendChild(p);
      for (j = 0, dd = target_lib[i]['id'].length; j < dd; j++) {
        let { input, label } = create_radio(target_lib[i]['name'], target_lib[i]['id'][j], target_lib[i]['value'][j]);
        form.appendChild(input);
        form.appendChild(label);
      }

    }
  }
}

//ラジオボタン生成
const create_radio = (radio_name, radio_id, label_text) => {
  let label = document.createElement('label');
  let input = document.createElement('input');
  input.type = 'radio';
  input.name = radio_name;
  input.id = radio_id;
  input.value = label_text;
  label.htmlFor = radio_id;
  label.innerText = label_text;
  return { input, label };
}

//テキストボックス生成
const create_textbox = (text_id, text_value) => {
  let input = document.createElement('input');
  input.type = 'text';
  input.name = text_id;
  input.id = text_id;
  input.placeholder = text_value;
  return input;
}

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

//セレクトボックスの生成
const select_create = (lib, target) => {
  let tango = document.getElementById(target);
  while (tango.lastChild) {
    tango.innerHTML = "";
  }
  for (i = 0, j = lib.length; i < j; i++) {
    let op = document.createElement('option');
    op.value = lib[i];
    op.text = lib[i];
    tango.appendChild(op);
  }
}

const text_value = target_id => {
  let target = document.getElementById(target_id);
  return target.value;
}

const radio_value = target_name => {
  let target = document.getElementsByName(target_name);
  for (i = 0, d = target.length; i < d; i++) {
    if (target[i].checked) {
      return target[i].value;
    }
  }
}