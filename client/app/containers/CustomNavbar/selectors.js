import { createSelector } from 'reselect';

/**
 * Direct selector to the customNavbar state domain
 */
const selectCustomNavbarDomain = () => state => state.get('customNavbar');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CustomNavbar
 */

const selectCustomNavbar = () => createSelector(
  selectCustomNavbarDomain(),
  (substate) => substate
);

export default selectCustomNavbar;
export {
  selectCustomNavbarDomain,
};
