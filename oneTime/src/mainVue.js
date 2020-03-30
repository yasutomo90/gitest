Vue.component('form-name', {
  template: `
  <div>
  <p>test</p>
  <p>{{ msgTest }}</p>
</div>`
});

const app = new Vue({
  el: '#app',
  data: {
    msgTest: 'test'
  }
});