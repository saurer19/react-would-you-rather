import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Button, Form, Header } from "semantic-ui-react";
class Login extends Component {
  state = {
    user: "",
    password: ""
  };
  handleChange1 = e => {
    const user = e.target.value
    this.setState(() => ({
      user
    }));
  };
  handleChange2 = e => {
    const password = e.target.value
    this.setState(() => ({
      password
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {user, password} = this.state
    const {users, dispatch} = this.props
    const currentUser = users[user];
    console.log(currentUser)

    if (currentUser && currentUser.password===password){
        dispatch(handleInitialData(user))

    }
    this.setState({
      user: "",
      password: ""
    })

  };
  render() {
    const {user,password} = this.state
    return (
      <Form  onSubmit={this.handleSubmit}>
        <Header as='h2' content='Log In' subheader='almost ready to play' />

        <Form.Field>
          <label>User</label>
          <input placeholder="User"
          value={user}
          onChange={this.handleChange1} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password"
          value={password}
          onChange={this.handleChange2} />
        </Form.Field>

        <Button type="submit"
          disabled={user === '' || password===''}
          onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Login);
