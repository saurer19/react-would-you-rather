import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { _getQuestions, _getUsers } from "../utils/_DATA";
import { showLoading, hideLoading } from 'react-redux-loading'
const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return (_getUsers()).then((users ) => {
      return (_getQuestions()).then((questions) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading())
      });
    });
  };
}
