import expect from 'expect';
import categoriesListReducer from '../reducer';
import { fromJS } from 'immutable';

describe('categoriesListReducer', () => {
  it('returns the initial state', () => {
    expect(categoriesListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
