import expect from 'expect';
import adminDashboardReducer from '../reducer';
import { fromJS } from 'immutable';

describe('adminDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(adminDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
