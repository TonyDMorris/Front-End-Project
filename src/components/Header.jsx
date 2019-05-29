import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "@reach/router";

function Header() {
  const [isHome, changeHome] = useState(true);
  console.log(window.location.pathname);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            App Name
          </Typography>
          {isHome ? (
            <Button
              onClick={() => {
                changeHome(!isHome);
              }}
              color="inherit"
            >
              <Link to="/create">Create New Game</Link>
            </Button>
          ) : (
            <Button
              onClick={() => {
                changeHome(!isHome);
              }}
              color="inherit"
            >
              <Link to="/">Home</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export default Header;
