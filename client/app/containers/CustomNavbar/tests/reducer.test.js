import expect from 'expect';
import customNavbarReducer from '../reducer';
import { fromJS } from 'immutable';

describe('customNavbarReducer', () => {
  it('returns the initial state', () => {
    expect(customNavbarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
