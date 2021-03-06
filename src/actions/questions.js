import {  _saveQuestionAnswer } from "../utils/_DATA";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_VOTE = "SAVE_VOTE";
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}
function voteQuestion({ qid, authedUser, answer }) {
  return {
    type: SAVE_VOTE,
    id: qid,
    authedUser,
    answer
  };
}

export function handleVoteQuestion(answer) {
  return dispatch => {
    return _saveQuestionAnswer(answer).then(() =>
      dispatch(voteQuestion(answer))
    );
  };
}
