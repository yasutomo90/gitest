const app = new Vue({
  el: '#app',
  data: {
    categorys: ['テクニカル', 'カスタマー'],
    categoryPic: null,
    pcRadios: ['test1', 'test2', 'test3'],
    csRadios: ['check1', 'check2', 'check3'],
    categoryValue: null,

    farstForm: {
      userId: null,
      userName: null,
      tel: null,
      number: null
    },
    confirms: {
      'test1': ['userId', 'userName', 'tel'],
      'test2': ['userId', 'userName', 'tel'],
      'test3': ['userId', 'userName', 'tel'],
      'check1': ['userId', 'userName', 'number'],
      'check2': ['userId', 'userName', 'number'],
      'check3': ['userId', 'userName', 'number']
    },
    questions: {
      'test1': ['question1', 'question2', 'question3'],
      'test2': ['question4', 'question2', 'question3'],
      'test3': ['question15', 'question2', 'question3'],
      'check1': ['question12', 'question2', 'question3'],
      'check2': ['question17', 'question2', 'question3'],
      'check3': ['question16', 'question2', 'question3']
    },
    answer: null,
    reception: {
      'test1': { 'talkScript': 'テスト１\r\ntest', 'confirms': ['userId', 'userName', 'tel'], 'questions': ['question1', 'question2', 'question3'] },
      'test2': { 'talkScript': 'aa:テスト２', 'confirms': ['userId', 'userName', 'tel'], 'questions': ['question4', 'question2', 'question3'] },
      'test3': { 'talkScript': 'テ:スト３', 'confirms': ['userId', 'userName', 'tel'], 'questions': ['question15', 'question2', 'question3'] },
      'check1': { 'talkScript': 'チェック１', 'confirms': ['userId', 'userName', 'number'], 'questions': ['question12', 'question2', 'question3'] },
      'check2': { 'talkScript': 'チェック２', 'confirms': ['userId', 'userName', 'number'], 'questions': ['question17', 'question2', 'question3'] },
      'check3': { 'talkScript': 'チェック３', 'confirms': ['userId', 'userName', 'number'], 'questions': ['question16', 'question2', 'question3'] }
    }
  },
  computed: {
    opTalk: function () {
      let cateValue = this.categoryValue;
      if (!cateValue) {
        return '';
      }else{
        return this.reception[cateValue]['talkScript'];
      }
    }
  }
});



    // talkScript: {
    //   'test1': 'テスト１\r\ntest',
    //   'test2': 'aa:テスト２',
    //   'test3': 'テ:スト３',
    //   'check1': 'チェック１',
    //   'check2': 'チェック２',
    //   'check3': 'チェック３'
    // },