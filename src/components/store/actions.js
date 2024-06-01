import { SET_KEY, SET_USERS } from './constants';

export const setKey = payload => ({
  type: SET_KEY,
  payload,
});

export const setUsers = payload => ({
  type: SET_USERS,
  payload,
});