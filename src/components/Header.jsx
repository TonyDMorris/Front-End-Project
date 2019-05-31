import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, SWitch } from "@material-ui/core";
import { Link } from "@reach/router";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import LocDropDown from "./LocDropDown";
function Header(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            App Name
          </Typography>
          <LocDropDown />
          {props.location.pathname === "/" ? (
            <Button variant="contained">
              <Link className={classes.button} to="/create">
                {t("Create New Game")}
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
