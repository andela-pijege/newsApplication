import axios from 'axios';

class Api {
  constructor() {
    this.linkString = 'https://newsapi.org/v1/articles?&apiKey=213327409d384371851777e7c7f78dfe';
    this.apilink = 'https://newsapi.org/v1/sources?language=en';
    this.link = this.linkString;
    this.num_query = 0;
    this.result = [];
    this.hasError = false;
    this.errorMessage = '';
  }

  addQuery(type, value) {
    this.link += `&${type}=${value}`;
  }

  clearQuery() {
    this.link = this.linkString;
  }

  getLink() {
    return this.link;
  }

  makeApiCall() {
    axios.get(this.getLink()).then((response) => {
      if (response.status === 200) {
        this.result = response.data;
        console.log(this.result);
      }
    })
      .catch((error) => {
        this.errorMessage = error;
        console.log(this.errorMessage);
      });
  }

}

export default new Api();
