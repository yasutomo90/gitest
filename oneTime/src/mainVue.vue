const app = new Vue({
  el: '#app',
  data: {
    stepNumber: 1,
    customer: '',
    csModel: '',
    questionRadio: '',
    userName: '',
    userId: '',
    telNo: '',
    overview: '',
    businessHours: {
      'PCサポート': '営業時間 09:00～21:00  電話番号 xxxx-xxx-xxx',
      'とことん': '営業時間 09:00～22:00  電話番号 xxxx-xxx-xxx',
      'プレミア': '営業時間 09:00～21:00  電話番号 xxxx-xxx-xxx',
      'CITS': '営業時間 09:00～19:00  電話番号 xxxx-xxx-xxx',
      'Office365': '営業時間 09:00～18:00  電話番号 xxxx-xxx-xxx',
      '光ギガ': '営業時間 10:00～19:00  電話番号 xxxx-xxx-xxx',
      'TOKAI': '営業時間 10:00～19:00  電話番号 xxxx-xxx-xxx',
      'CloudLine': '営業時間 10:00～19:00  電話番号 xxxx-xxx-xxx',
      'BACS': '営業時間 10:00～19:00  電話番号 xxxx-xxx-xxx',
      'BATS': '営業時間 10:00～19:00  電話番号 xxxx-xxx-xxx',
      'DTI': '営業時間 10:00～19:00  電話番号 xxxx-xxx-xxx',
      'hi-ho': '営業時間 10:00～19:00  電話番号 xxxx-xxx-xxx'
    }
  },
  methods: {
    backStep: function () {
      this.stepNumber--;
    },
    nextStep: function () {
      this.stepNumber++;
    }
  },
  computed: {
    times: function () {
      let csmodel = this.csModel;
      return this.businessHours[csmodel];
    }
  },
});