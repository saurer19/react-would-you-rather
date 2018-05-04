import React, { Component } from "react";
import { connect } from "react-redux";
import { Table,Header,Image } from 'semantic-ui-react'

class LeaderRow extends Component {

  render() {
    const{user} = this.props
    if (user === null) {
      return <p>This user doesn't exist</p>;
    }
    return (
      <Table.Row>
      <Table.Cell>
        <Header as='h3' image>
          <Image src={user.avatarURL}  size='mini' />

          <Header.Content>
              {user.name}
            <Header.Subheader>{user.id}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        {Object.keys(user.answers).length}
      </Table.Cell>
      <Table.Cell>
          {user.questions.length}
      </Table.Cell>
    </Table.Row>

    );
  }
}
function mapStateToProps({users}, {id}){
  const user = users[id]
  return{
    user: user
      ? user
      :null
  }
}
export default connect(mapStateToProps)(LeaderRow);
