
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from "react-redux";
import {setLogOut} from "../actions/authedUser"
class Nav extends Component {
  logout = e =>{
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setLogOut())
  }
  render(){
    return (

      <div>
          <Menu pointing secondary>
            <Menu.Item name="home" header as={NavLink} exact to="/" />
            <Menu.Item name="leaderboard" header as={NavLink} to="/leaderboard" />
            <Menu.Item name="New" header as={NavLink} to="/create" />
            <Menu.Menu position='right'>
              <Menu.Item>


                <img src= {this.props.currentUser.avatarURL} />
                <h4>
                  {this.props.currentUser.id}
                </h4>
              </Menu.Item>
            <Menu.Item name='logout' onClick={(e)=>{this.logout(e)}}  />
          </Menu.Menu>

          </Menu>

        </div>
    )
  }

}
function mapStateToProps({authedUser,users}){
  const currentUser = users[authedUser];

  return{
    currentUser
  }
}
export default connect(mapStateToProps)(Nav)
