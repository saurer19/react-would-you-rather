import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import QuestionDetail from './QuestionDetail'
import LoadingBar from 'react-redux-loading'
import { Container } from 'semantic-ui-react'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    console.log("loading", this.props.loading)
    return (

      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Nav/>
            {this.props.loading === true
              ? null
              : <Container>
            <Route exact path='/'  component={Dashboard} />
            <Route path='/leaderboard' component={Leaderboard}/>
            <Route path='/create' component={NewQuestion}/>
            <Route path='/question/:id' component={QuestionDetail} />
          </Container>
        }
      </div>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({authedUser}){
  return {
    loading: authedUser===null
  }
}
export default connect(mapStateToProps)(App);
