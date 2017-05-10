import { expect } from 'chai';
import NewsActions from '../../actions/NewsActions';

describe('News Action test', () => {
  it('it should return an object from api', () => {
    expect(NewsActions).to.exist;
  });
});
