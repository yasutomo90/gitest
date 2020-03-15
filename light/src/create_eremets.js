//テキストboxとラジオの生成
const create_form = (target_id, target_lib) => {
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
      };
      target.appendChild(form);
    };
  };
};

const create_radio_area = target_lib => {
  for (i = 0, d = target_lib.length; i < d; i++) {
    let target = document.getElementById('radio_right');
    let p = document.createElement('p');
    let form = document.createElement('form');
    p.insertAdjacentText('beforeend', target_lib[i]['label_text']);
    document.getElementById('radio_left').appendChild(p);
    for (j = 0, dd = target_lib[i]['id'].length; j < dd; j++) {
      let { input, label } = create_radio(target_lib[i]['name'], target_lib[i]['id'][j], target_lib[i]['value'][j]);
      form.appendChild(input);
      form.appendChild(label);
    };
    target.appendChild(form);
  };
};

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
};

//テキストボックス生成
const create_textbox = (text_id, text_value) => {
  let input = document.createElement('input');
  input.type = 'text';
  input.name = text_id;
  input.id = text_id;
  input.placeholder = text_value;
  return input;
};

//セレクトボックスの生成
const select_create = (lib, target) => {
  let tango = document.getElementById(target);
  while (tango.lastChild) {
    tango.innerHTML = "";
  };
  for (i = 0, j = lib.length; i < j; i++) {
    let op = document.createElement('option');
    op.value = lib[i];
    op.text = lib[i];
    tango.appendChild(op);
  };
};