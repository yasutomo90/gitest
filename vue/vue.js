Vue.component('test-comp', {
  template: `<form @input="submit">
  <input type="text" v-model="userId" placeholder="input userID">
  <input type="text" v-model="userName" placeholder="input user NAME">
  </form>`,
  data: function(){
    return {
      userId: null,
      userName: null
    };
  },
  methods: {
    submit: function(){
      this.$emit('update',{
        userId: this.userId,
        userName: this.userName
      })
    }
  },

});

var app = new Vue({
  el: '#app',
  data: {
    testname: null,
    csModel: null,

    form:{
      userId: null,
      userName: null,
    },

    pcradios: [
      { value: 'pcSupport'},
      { value: 'tktn'}
    ],

    csradios:[
      { value: 'giga'},
      { value: 'cl'}
    ]
  },

  methods:{
    updateForm:function(formData){
      Object.assign(this.form, formData)
    }
  }
})