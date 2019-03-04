import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Library from './pages/Library';
import Layout from './hoc/Layout';
import * as actions from './store/actions';

import asyncComponent from './hoc/asyncComponent/asyncComponent';

const AsyncPoem = asyncComponent(() => {
  return import('./pages/Poem');
});

const AsyncNewPoem = asyncComponent(() => {
  return import('./pages/NewPoem');
});

const AsyncAuthors = asyncComponent(() => {
  return import('./pages/Authors');
});

const AsyncCategories = asyncComponent(() => {
  return import('./pages/Categories');
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
            <Route path="/authors" component={AsyncAuthors} />
            <Route path="/categories" component={AsyncCategories} />
            <Route path="/poems/:id" exact component={AsyncPoem} />
            <Route path="/new" exact component={AsyncNewPoem} />
            <Route path="/home" exact component={Library} />
            <Redirect from='/' to="/home" /> 
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
