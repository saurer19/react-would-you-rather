import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from "./Poll";
import {Card, Header, Segment} from 'semantic-ui-react'
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header as='h2' content='New Questions' attached='top'  />

        <Segment attached>

        <Card.Group>
          {this.props.unansweredIds.map(id => (
              <Poll key={id} id={id} />
          ))}

        </Card.Group>
      </Segment>
      <Header as='h2' content='Done' attached='top'  />

        <Segment attached>

        <Card.Group>
          {this.props.answeredIds.map(id => (
              <Poll key={id} id={id} />
          ))}

        </Card.Group>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const currentUser = users[authedUser];
  const answered = Object.keys(currentUser.answers);

  const unanswered = Object.keys(questions).filter(question => {
    return answered.indexOf(question) === -1;
  });
  console.log("question",unanswered)

  return {
    answeredIds: answered,
    unansweredIds: unanswered,
    authedUser
  };
}

export default connect(mapStateToProps)(Dashboard);
