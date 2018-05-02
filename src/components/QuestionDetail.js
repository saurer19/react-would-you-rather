import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Header, Button, Grid,Segment } from "semantic-ui-react";
import {handleVote} from '../actions/shared'
class QuestionDetail extends Component {
  handleVote =(e,vote) =>{
    e.preventDefault()
    const {dispatch,currentQuestion,authedUser,users}= this.props

    dispatch(handleVote({
      qid:currentQuestion.id,
      answer:vote,
      authedUser
    }))

  }
  render(){
    const {currentQuestion, isnotAnswered} = this.props
    return(
      <div>
        <Header as='h2' content='Would You Rather' subheader='Select a option!' />
        <br/>

        <Grid>
        <Grid.Column width={8}>
          <Segment attached='top'>
            {currentQuestion.optionOne.text}
          </Segment>
          {isnotAnswered ===true
            ?<Button
              attached='bottom'
              content='Click'
              color="teal"
              onClick={ (e) => this.handleVote(e,"optionOne")}
            />
            :<Segment attached>
              votes: {currentQuestion.optionOne.votes.length}
            </Segment>

          }

        </Grid.Column>
        <Grid.Column width={8}>
          <Segment attached='top'>
            {currentQuestion.optionTwo.text}
          </Segment>
          {isnotAnswered ===true
            ?<Button
              attached='bottom'
              content='Click'
              color="teal"
              onClick={(e) => this.handleVote(e,"optionTwo")}
            />
            :<Segment attached>
              votes: {currentQuestion.optionTwo.votes.length}
            </Segment>

          }
        </Grid.Column>
      </Grid>

      </div>

    )
  }

}
function mapStateToProps ({questions, authedUser,users}, props){
  const {id} = props.match.params
  const currentQuestion = questions[id];
  const currentUser = users[authedUser];
  const answered = Object.keys(currentUser.answers);
  const isnotAnswered=answered.indexOf(id) === -1
  return{
    currentQuestion,
    authedUser,
    isnotAnswered
  }
}
export default connect(mapStateToProps)(QuestionDetail)
