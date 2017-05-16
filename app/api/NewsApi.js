import Request from 'superagent';
/**
 * @desc Responsible for making api calls
 * @class Api
 */
class Api {
  /**
   *
   * @description gets news sources from the api
   * @returns {object} returns either success or failure
   * @memberof Api
   * @param {object} success returns a json object
   * @param {string} error returns an error message
   */
  static getSource(success, error) {
    const url = 'https://newsapi.org/v1/sources?language=en';
    return Request('GET', url).then(success, error);
  }
  /**
   *
   * @description gets news articles from the api
   * @returns {object} returns either success or failure
   * @memberof Api
   * @param {string} source name of news source
   * @param {string} sort sort category
   * @param {object} success returns a json object if call as successfull
   * @param {string} error returns an error message if call was not successful
   */
  static getNews(source, sort, success, error) {
    const apikey = process.env.API_KEY;
    const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=${apikey}`;
    return Request('GET', url).then(success, error);
  }
}

export default Api;
