import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLoginData } from "../actions/users";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import Login from "./Login";
import QuestionDetail from "./QuestionDetail";
import LoadingBar from "react-redux-loading";
import { Container, Button } from "semantic-ui-react";
import "./App.css";
class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleLoginData());
    console.log("props:", this.props);
  };

  render() {
    const NoMatch = ({ location }) => (
      <div>
        <h2>
          Error 404
        </h2>
        <h3>
           No match for <code>{location.pathname}</code>
        </h3>
        <Link to={"/"}>
          <Button fluid>Please Login to play</Button>
        </Link>
      </div>
    );
    if (!this.props.logged) {
      return (
        <div className="ui container center aligned">
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
      );
    } else {
      return (
        <Router>
          <Fragment>
            <LoadingBar />
            <div>
              <Nav />
              {this.props.loading === true ? null : (
                <div className="ui container center aligned">
                  <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route path="/create" component={NewQuestion} />
                    <Route path="/question/:id" component={QuestionDetail} />
                    <Route component={NoMatch} />
                  </Switch>
                </div>
              )}
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
