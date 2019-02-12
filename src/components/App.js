/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import UsersPage from "./containers/usersPage";
import PostsPage from "./containers/postsPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import withRoot from '../withRoot';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 0,
  },
};

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route path="/posts" component={PostsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(hot(module)(App)));
