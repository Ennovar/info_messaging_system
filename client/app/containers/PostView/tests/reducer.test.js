import expect from 'expect';
import postViewReducer from '../reducer';
import { fromJS } from 'immutable';

describe('postViewReducer', () => {
  it('returns the initial state', () => {
    expect(postViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
