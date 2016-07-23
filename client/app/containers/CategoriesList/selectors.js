import { createSelector } from 'reselect';

/**
 * Direct selector to the categoriesList state domain
 */
const selectCategoriesListDomain = () => state => state.get('data');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CategoriesList
 */

const selectCategoriesList = () => createSelector(
  selectCategoriesListDomain(),
  (substate) => substate
);

export default selectCategoriesList;
export {
  selectCategoriesListDomain,
};
