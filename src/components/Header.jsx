import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "@reach/router";

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            App Name
          </Typography>
          {props.location.pathname === "/" ? (
            <Button variant="contained">
              <Link className={classes.button} to="/create">
                Create New Game
              </Link>
            </Button>
          ) : (
            <Button variant="contained">
              <Link className={classes.button} to="/">
                Home
              </Link>
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
  },
  button: {
    color: "#283593",
    fontWeight: 600,
    textDecoration: "none"
  }
}));

export default Header;
