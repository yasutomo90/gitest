Vue.component('test-comp', {
  template: ``
})

var app = new Vue({
  el: '#app',
  data: {
    testname: null,
    csModel: null,
    pcradios: [
      { value: 'pcSupport'},
      { value: 'tktn'}
    ],
    csradios:[
      { value: 'giga'},
      { value: 'cl'}
    ]
  }
})