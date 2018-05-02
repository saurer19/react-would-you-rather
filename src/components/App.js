import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleLoginData } from "../actions/users";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import Login from "./Login"
import QuestionDetail from "./QuestionDetail";
import LoadingBar from "react-redux-loading";
import { Container } from "semantic-ui-react";
import "./App.css";
class App extends Component {
  componentDidMount =()=>{
    this.props.dispatch(handleLoginData())
    console.log("props:",this.props)
  }
  render() {
    if(!this.props.logged){
     return(
       <div className="ui container center aligned">

       <Router>
         <Route path="/" component={Login} />
      </Router>
    </div>
    )
    }else{
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Nav/>
            {this.props.loading === true
              ? null
              :
            <div className="ui container center aligned">
              <Route exact path="/" component={Dashboard} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/create" component={NewQuestion} />
              <Route path="/question/:id" component={QuestionDetail} />
            </div>
          }
          </div>

        </Fragment>
      </Router>
    );
  }
  }
}
function mapStateToProps({ authedUser }) {
  return {
    logged: authedUser != null
  };
}
export default connect(mapStateToProps)(App);
