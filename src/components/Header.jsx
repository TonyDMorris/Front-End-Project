import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Fab } from "@material-ui/core";
import { Link } from "@reach/router";
import AddIcon from "@material-ui/icons/Add";
// import { purple, green } from "@material-ui/core/colors/purple";
import SvgIcon from "@material-ui/core/SvgIcon";

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            The Hunt
          </Typography>
          {props.location.pathname === "/" ? (
            <Link className={classes.button} to="/create">
              <Fab
                size="small"
                color="primary"
                variant="extended"
                aria-label="create"
                className={classes.fab}
              >
                create
                <AddIcon />
              </Fab>
            </Link>
          ) : (
            <Link className={classes.button} to="/">
              <Fab
                size="small"
                color="primary"
                variant="round"
                aria-label="home"
                className={classes.fab}
              >
                <SvgIcon>
                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </SvgIcon>
              </Fab>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// const theme = createMuiTheme({
//   palette: {
//     primary: purple,
//     secondary: green
//   },
//   status: {
//     danger: "orange"
//   }
// });

const useStyles = makeStyles((theme) => ({
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
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default Header;
