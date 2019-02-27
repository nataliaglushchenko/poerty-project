import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Library from './pages/Library/';
import Layout from './hoc/Layout/';
import Authors from './pages/Authors/';
import NewPoem from './pages/NewPoem';
import * as actions from './store/actions';

import asyncComponent from './hoc/asyncComponent/asyncComponent';

const AsyncPoem = asyncComponent(() => {
  return import('./pages/Poem/');
});

const AsyncOverview = asyncComponent(() => {
  return import('./pages/Overview/');
});

class App extends Component {
  componentDidMount() {
    if(!this.props.isAuthenticated) {
      this.props.onGetUserData();
    }
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/authors" component={Authors} />
            <Route path="/categories/:slug" component={AsyncOverview} />
            <Route path="/poems/:id" exact component={AsyncPoem} />
            <Route path="/new" exact component={NewPoem} />
            <Route path="/" exact component={Library} />
            <Route render={()=><h1>Not Found</h1>} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetUserData: () => dispatch(actions.getUserData())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
