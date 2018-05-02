import { RECEIVE_USERS, VOTE_UPDATE, USER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case VOTE_UPDATE:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.answer
          }
        }
      };
    case USER_QUESTION:
    console.log("action hereee", action)

      const {author, id} = action
      console.log("id", id)
      console.log("author", author)
      console.log("hossd",state[author])
      return{
        ...state,
        [author]:{
          ...state[author],
            questions:state[author].questions.concat([id])
          }
        };
    default:
      return state;
  }
}
