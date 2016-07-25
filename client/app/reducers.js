/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
GET_ROOT_CATEGORIES,
GET_CATEGORY_BY_ID,
GET_POST_BY_ID,
TRY_USER_LOGIN,
GET_PROJECT,
GET_PROJECTS,
} from './api/constants';

import cookie from 'react-cookie';


function setDefaultAuthHeaders(headers) {
  console.log(headers);
  cookie.save('access-token', headers['access-token']);
  cookie.save('client', headers['client']);
  cookie.save('expiry', headers['expiry']);
  cookie.save('token-type', headers['token-type']);
  cookie.save('uid', headers['uid']);
}

function removeHeaders() {
  cookie.remove('access-token');
  cookie.remove('client');
  cookie.remove('expiry');
  cookie.remove('token-type');
  cookie.remove('uid');
  cookie.remove('admin');
}


/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}
function dataReducer(state = {}, action) {
  switch (action.type) {
    case TRY_USER_LOGIN:
      setDefaultAuthHeaders(action.payload.headers);
      return state;
    case GET_ROOT_CATEGORIES:
      return { ...state, categories: action.payload.data };
    case GET_PROJECTS:
      return { ...state, projects: action.payload.data };
    case GET_CATEGORY_BY_ID:
      return { ...state, currentCategory: action.payload.data };
    case GET_PROJECT:
      return { ...state, projects: state.projects.map((project) => {
        if (project.id !== action.meta.id) {
          return project;
        }
        return action.payload.data;
      }) };
    case GET_POST_BY_ID:
      return { ...state, currentPost: action.payload.data };
    default:
      return state;
  }
}
/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    data: dataReducer,
    ...asyncReducers,
  });
}
