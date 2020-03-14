let obj_value = '';
let sub_object_value = '';

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