import {  _getUsers } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const VOTE_UPDATE='VOTE_UPDATE'
export const USER_QUESTION='USER_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}
export function voteQuestion ({qid,authedUser,answer}){
  return {
    type:VOTE_UPDATE,
    id:qid,
    authedUser,
    answer,
  }
}
export function userQuestion({id, author}){
  return{
    type:USER_QUESTION,
    id,
    author
  }
}

export function handleLoginData() {
  return dispatch => {
    dispatch(showLoading());
    return _getUsers().then(users => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
}
