import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Button, Grid, Segment } from "semantic-ui-react";
import { handleVote } from "../actions/shared";
class QuestionDetail extends Component {
  handleVote = (e, vote) => {
    e.preventDefault();
    const { dispatch, currentQuestion, authedUser } = this.props;

    dispatch(
      handleVote({
        qid: currentQuestion.id,
        answer: vote,
        authedUser
      })
    );
  };
  render() {
    const { currentQuestion, isnotAnswered,owner } = this.props;
    const votes2=currentQuestion.optionTwo.votes.length
    const votes1= currentQuestion.optionOne.votes.length
    return (
      <div>
        <Header
          as="h2"
          content="Would You Rather"
          subheader="Select a option!"
        />
        <h4>{owner.id}</h4>
        <img src={owner.avatarURL} />
        <br />

        <Grid>
          <Grid.Column width={8}>
            <Segment attached="top">{currentQuestion.optionOne.text}</Segment>
            {isnotAnswered === true ? (
              <Button
                attached="bottom"
                content="Click"
                color="teal"
                onClick={e => this.handleVote(e, "optionOne")}
              />
            ) : (
              <Segment attached>
                <p>
                  votes: {votes1}
                </p>
                <p>
                  percentage: {votes1* 100 /(votes1+votes2) }%
                </p>
              </Segment>
            )}
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment attached="top">{currentQuestion.optionTwo.text}</Segment>
            {isnotAnswered === true ? (
              <Button
                attached="bottom"
                content="Click"
                color="teal"
                onClick={e => this.handleVote(e, "optionTwo")}
              />
            ) : (
              <Segment attached>
                <p>
                  votes: {votes2}
                </p>
                <p>
                  percentage: {votes2* 100 /(votes1+votes2) }%
                </p>
              </Segment>
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser, users }, props) {
  const { id } = props.match.params;
  const currentQuestion = questions[id];
  const owner = users[currentQuestion.author]
  const currentUser = users[authedUser];
  const answered = Object.keys(currentUser.answers);
  const isnotAnswered = answered.indexOf(id) === -1;
  return {
    currentQuestion,
    authedUser,
    isnotAnswered,
    currentUser,
    owner
  };
}
export default connect(mapStateToProps)(QuestionDetail);
