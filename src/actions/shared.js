import { receiveUsers, voteQuestion, userQuestion } from "./users";
import { receiveQuestions, handleVoteQuestion, saveQuestion } from "./questions";
import { setAuthedUser } from "./authedUser";
import { _getQuestions,_saveQuestion } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData(id) {
  return dispatch => {
    dispatch(showLoading());
    return _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(id));
      dispatch(hideLoading());
    });
  };
}


export function handleVote(question) {
  return dispatch => {
    dispatch(showLoading());
    dispatch(handleVoteQuestion(question));
    dispatch(voteQuestion(question));
    dispatch(hideLoading());
  };
}
export function handleNewQuestion({authedUser,optionOne,optionTwo}) {
  return dispatch => {
    dispatch(showLoading());
    return _saveQuestion({
      optionOneText:optionOne,
      optionTwoText:optionTwo,
      author:authedUser
    }).then(question => {
      console.log("aqui", question)
      dispatch(saveQuestion(question))
      dispatch(userQuestion(question))
      dispatch(hideLoading());

    })
  };
}
