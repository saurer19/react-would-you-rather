import React, { Component } from "react";
import { connect } from "react-redux";
import {  Table } from "semantic-ui-react";
import LeaderRow from "./LeaderRow";
class Leaderboard extends Component {
  render() {
    const users = Array.from(this.props.users);

    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Users</Table.HeaderCell>
            <Table.HeaderCell>Answered</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map(id => <LeaderRow key={id} id={id} />)}
        </Table.Body>
      </Table>
    );
  }
}
function mapStateToProps({ users }) {
  const listUsers = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    users:listUsers
  };
}
export default connect(mapStateToProps)(Leaderboard);
