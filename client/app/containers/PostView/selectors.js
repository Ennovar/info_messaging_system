import { createSelector } from 'reselect';
/**
 * Direct selector to the postView state domain
 */
const selectPostViewDomain = () => state => state.get('data');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PostView
 */

const selectPostView = () => createSelector(
  selectPostViewDomain(),
  (substate) => substate
);

export default selectPostView;
export {
  selectPostViewDomain,
};
