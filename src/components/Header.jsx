import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Fab } from "@material-ui/core";
import { Link } from "@reach/router";
import AddIcon from "@material-ui/icons/Add";
import LocDropDown from "./LocDropDown";
// import { purple, green } from "@material-ui/core/colors/purple";
import SvgIcon from "@material-ui/core/SvgIcon";
import CreateIcon from "./CreateIcon";
import HomeIcon from "./HomeIcon";

function Header(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <AppBar color="default" position="static" style={{ marginRight: 0 }}> */}
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          The Hunt
        </Typography>
        <LocDropDown />
        {props.location.pathname === "/" ? (
          <Link className={classes.button} to="/create">
            <CreateIcon />
          </Link>
        ) : (
          <Link className={classes.button} to="/">
            <HomeIcon />
          </Link>
        )}
      </Toolbar>
      {/* </AppBar> */}
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
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default Header;
