import React from 'react';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
};

const NavBar = () => {

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <NavLink exact to="/">Users</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/posts">Posts</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
