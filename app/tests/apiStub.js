import api from './../api/NewsApi';
import sourceSampleData from './sourceSampleJson.json';

const apiStub = {
  getSource() {
    return sourceSampleData.body.sources;
  },
};

export default apiStub;
