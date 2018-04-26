import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Header, Table } from 'semantic-ui-react'
import LeaderRow from './LeaderRow'
class Leaderboard extends Component{

  render(){
    const users = Array.from(this.props.users)

    return(
      <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Users</Table.HeaderCell>
        <Table.HeaderCell>Answered</Table.HeaderCell>
        <Table.HeaderCell>Created</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {users.map(id =>(
        <LeaderRow key={id} id={id} />
      ))}
    </Table.Body>
  </Table>

    )
  }
}
function mapStateToProps({  authedUser, users}){
  return{
    users:Object.keys(users),
    authedUser
  }
}
export default connect(mapStateToProps)(Leaderboard);
