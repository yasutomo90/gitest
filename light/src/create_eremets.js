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
      let form = document.createElement('form');
      let input_1 = document.createElement('input');
      let input_2 = document.createElement('input');
      let label_1 = document.createElement('label');
      let label_2 = document.createElement('label');

      input_1.type = 'radio';
      input_1.name = test_lib[i][0];
      input_1.id = test_lib[i][1] + '_ok';
      label_1.htmlFor = test_lib[i][1] + '_ok';
      label_1.innerText = test_lib[i][2];

      input_2.type = 'radio';
      input_2.name = test_lib[i][0];
      input_2.id = test_lib[i][1] + '_ng';
      label_2.htmlFor = test_lib[i][1] + '_ng';
      label_2.innerText = test_lib[i][3];

      form.appendChild(input_1);
      form.appendChild(label_1);
      form.appendChild(input_2);
      form.appendChild(label_2);
      target.appendChild(form);
    }
  }
}