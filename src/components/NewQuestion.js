import React, { Component } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };
  handleChange1 = e => {
    const optionOne = e.target.value;
    this.setState(() => ({
      optionOne
    }));
  };
  handleChange2 = e => {
    const optionTwo = e.target.value;
    this.setState(() => ({
      optionTwo
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const {dispatch} = this.props
    console.log(optionOne, optionTwo);
    dispatch(handleSaveQuestion(optionOne,optionTwo))
    this.setState(() => ({
      optionOne: "",
      optionTwo: ""
    }));
  };
  render() {
    const {optionOne,optionTwo} = this.state
    return (
      <Form  onSubmit={this.handleSubmit}>
        <Header as='h2' content='Would You Rather' subheader='Create your own questions!' />

        <Form.Field>
          <label>First Option</label>
          <input placeholder="Option One"
          value={optionOne}
          onChange={this.handleChange1} />
        </Form.Field>
        <Form.Field>
          <label>Second Option</label>
          <input placeholder="Option Two"
          value={optionTwo}
          onChange={this.handleChange2} />
        </Form.Field>

        <Button type="submit"
          disabled={optionOne === '' || optionTwo===''}
          onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default connect()(NewQuestion);
