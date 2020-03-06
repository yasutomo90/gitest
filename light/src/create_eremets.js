//text : id , placeholder
//radio : title , name & id , label1 , label2

const test_lib = [
  ['text', 'test_text_id', 'test_placeholder'],
  ['radio', 'radio_test_id', 'test_label1', 'test_label2'],
  ['text', 'test_text_id2', 'test_placeholder2']
];


const create_form = () => {
  let target = document.getElementById('test_target');
  for (i = 0, d = test_lib.length; i < d; i++) {
    if (test_lib[i][0] == 'text') {
      let form = document.createElement('form');
      let input = document.createElement('input');
      input.type = 'text';
      console.log('text');
      input.name = test_lib[i][1];
      input.id = test_lib[i][1];
      input.placeholder = test_lib[i][2];
      form.appendChild(input);
      target.appendChild(form);
    } else if (test_lib[i][0] == 'radio') {
      console.log('radio');
    }
  }
}