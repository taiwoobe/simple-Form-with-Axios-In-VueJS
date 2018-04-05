new Vue({
  el: '#app',
  data: function data() {
    return {
      userID: 1,
      name: '',
      email: '',
      firstSon: '',
      response: '',
      activeClass: 'active'
    };
  },

  methods: {
    submitForm: function submitForm() {
      var _this = this;

      axios.post('//jsonplaceholder.typicode.com/posts', {
        userID: this.userID,
        name: this.name,
        email: this.email,
        firstSon: this.firstSon
      }).then(function (response) {
        console.log(response);
        _this.response = JSON.stringify(response, null, 2);
      }).catch(function (error) {
        _this.response = 'Error: ' + error.response.status;
      });
      this.name = '';
      this.email = '';
      this.firstSon = '';
    }
  }
});