import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Header, Button, Grid,Segment } from "semantic-ui-react";

class QuestionDetail extends Component {


  render(){
    const {currentQuestion, authedUser} = this.props
    return(
      <div>
        <Header as='h2' content='Would You Rather' subheader='Select a option!' />
        <br/>

        <Grid>
        <Grid.Column width={8}>
          <Segment attached='top'>
            {currentQuestion.optionOne.text}
          </Segment>
          <Button
            attached='bottom'
            content='Click'

          />
          <Button.Or />
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment attached='top'>
            {currentQuestion.optionTwo.text}
          </Segment>
          <Button
            attached='bottom'
            content='Click'

          />
        </Grid.Column>
      </Grid>

      </div>

    )
  }

}
function mapStateToProps ({questions, authedUser}, props){
  const {id} = props.match.params
  const currentQuestion = questions[id];
  return{
    currentQuestion,
    authedUser
  }
}
export default connect(mapStateToProps)(QuestionDetail)
