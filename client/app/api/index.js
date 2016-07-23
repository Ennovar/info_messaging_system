import axios from 'axios';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
import {
  BASE_URL,

  // Action types
  GET_ROOT_CATEGORIES,
  GET_CATEGORY_BY_ID,
  GET_POST_BY_ID,
  CREATE_CATEGORY,
  CREATE_POST,
  CREATE_PROJECT,
  CREATE_USER,
  GET_PROJECT,
  GET_PROJECTS,
  DELETE_POST_BY_ID,
  DELETE_CATEGORY_BY_ID,
  UPDATE_POST_BY_ID,
  UPDATE_CATEGORIES_BY_ID,
  TRY_USER_LOGIN,
  TRY_USER_LOGOUT,
} from './constants';
const user_token = cookie.load('access-token');


axios.interceptors.request.use(function(config) {
  const token = cookie.load('access-token');
  const client = cookie.load('client');
  const expiry = cookie.load('expiry');
  const token_type = cookie.load('token-type');
  const uid = cookie.load('uid');

  if ( token != null ) {
    config.headers['access-token'] = token;
    config.headers['client'] = client;
    config.headers['expiry'] = expiry;
    config.headers['token-type'] = token_type;
    config.headers['uid'] = uid;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});

function removeHeaders(){
  cookie.remove('access-token')
  cookie.remove('client')
  cookie.remove('expiry')
  cookie.remove('token-type')
  cookie.remove('uid')
  cookie.remove('admin')
}


export function getRootCategories() {
  const payload = axios.get(`${BASE_URL}/projects/categories`);
  return {
    type: GET_ROOT_CATEGORIES,
    payload,
  };
}

export function getCategory(id) {
  const payload = axios.get(`${BASE_URL}/projects/categories/${id}`);
  return {
    type: GET_CATEGORY_BY_ID,
    payload,
  };
}
export function getProjects() {
  const payload = axios.get(`${BASE_URL}/projects`);
  return {
    type: GET_PROJECTS,
    payload,
  };
}
export function getProject(id) {
  const payload = axios.get(`${BASE_URL}/projects/${id}`);
  return {
    type: GET_PROJECT,
    payload,
    meta: {
      id,
    },
  };
}

export function getPost(id) {
  const payload = axios.get(`${BASE_URL}/projects/posts/${id}`);
  return {
    type: GET_POST_BY_ID,
    payload,
  };
}

export function createCategory(category) {
  const payload = axios.post(`${BASE_URL}/projects/categories`, category);
  return {
    type: CREATE_CATEGORY,
    meta: {
      category,
    },
    payload,
  };
}

export function createPost(post) {
  const payload = axios.post(`${BASE_URL}/projects/posts`, post);
  return {
    type: CREATE_POST,
    meta: {
      post,
    },
    payload,
  };
}

export function createProject(project) {
  const payload = axios.post(`${BASE_URL}/projects`, project);

  return {
    type: CREATE_PROJECT,
    payload,
  };
}

export function updatePost(post) {
  console.log(post);
  const payload = axios.put(`${BASE_URL}/projects/posts/${post.id}`, post);
  return {
    type: UPDATE_POST_BY_ID,
    meta: {
      post,
    },
    payload,
  };
}

export function updateCategory(category) {
  const payload = axios.put(`${BASE_URL}/projects/categories/${category.id}`, category);
  return {
    type: UPDATE_CATEGORIES_BY_ID,
    meta: {
      category,
    },
    payload,
  };
}

export function updateMessage(message, id) {
  const data = {};
  data.message = message;
  console.log(data);
  const payload = axios.put(`${BASE_URL}/projects/${id}`, data);
  return {
    type: 'UPDATE_MESSAGE',
    payload,
  };
}

export function deletePost(id) {
  const payload = axios.delete(`${BASE_URL}/projects/posts/${id}`);
  return {
    type: DELETE_POST_BY_ID,
    payload,
  };
}
export function deleteCategory(id) {
  const payload = axios.delete(`${BASE_URL}/projects/categories/${id}`);
  return {
    type: DELETE_CATEGORY_BY_ID,
    payload,
  };
}

export function tryLogin(user) {
  const payload = axios.post(`${BASE_URL}/auth/sign_in`, user);
  return {
    type: TRY_USER_LOGIN,
    meta: {
      user,
    },
    payload,
  };
}

export function tryLogout() {
  removeHeaders();
  const payload = axios.delete(`${BASE_URL}/auth/sign_out`);
  return {
    type: TRY_USER_LOGOUT,
    payload,
  };
}


export function isLogedIn() {
  if (user_token) {
    return true;
  }
  return false;
}

export const apiMiddleware = store => next => action => {
  switch (action.type) {
    case CREATE_CATEGORY:
      console.log(action.meta.category.category);
      if (action.meta.category.category.category_id) {
        store.dispatch(getCategory(action.meta.category.category.category_id));
      } else {
        store.dispatch(getRootCategories());
      }
      break;
    case CREATE_POST:
      console.log(action);
      store.dispatch(getCategory(store.getState().data.currentCategory.id));
      break;
    case TRY_USER_LOGOUT:
      browserHistory.push('/');
      break;
    case DELETE_CATEGORY_BY_ID:
      store.dispatch(getRootCategories());
      break;
    case TRY_USER_LOGIN:
      browserHistory.push('/admin/projects');
      break;
    default:
      break;
  }
  const result = next(action);
  return result;
};
