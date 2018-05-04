import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION,
  SAVE_VOTE
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case SAVE_VOTE:
      const{answer, id, authedUser} = action
        return {
          ...state,
          [id]: {
            ...state[id],
            [answer]: {
              ...state[id][answer],
              votes:state[id][answer].votes.concat([
                authedUser
              ])
            }
          }
        };


    default:
      return state;
  }
}
