import { createSelector } from 'reselect';

/**
 * Direct selector to the adminDashboard state domain
 */
const selectAdminDashboardDomain = () => state => state.get('data');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AdminDashboard
 */

const selectAdminDashboard = () => createSelector(
  selectAdminDashboardDomain(),
  (substate) => substate
);

export default selectAdminDashboard;
export {
  selectAdminDashboardDomain,
};
