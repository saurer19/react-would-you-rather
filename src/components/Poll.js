import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
class Poll extends Component {
  render() {
    const { author, timestamp, optionOne, optionTwo, id } = this.props.question;
    if (this.props.question === null) {
      return <p>This question doesn't exist</p>;
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header>{author}</Card.Header>
          <Card.Meta>{formatDate(timestamp)}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/question/${id}`}>
            <Button fluid basic color="green">
              Show
            </Button>
          </Link>
        </Card.Content>
      </Card>
    );
  }
}
function mapStateToProps({ questions }, { id }) {
  const question = questions[id];
  return {
    question: question ? question : null
  };
}
export default connect(mapStateToProps)(Poll);
