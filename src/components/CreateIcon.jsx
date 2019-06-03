import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Fab } from "@material-ui/core";
import { Link } from "@reach/router";
import AddIcon from "@material-ui/icons/Add";
// import { purple, green } from "@material-ui/core/colors/purple";
import SvgIcon from "@material-ui/core/SvgIcon";

const CreateIcon = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Fab
      size="small"
      color="primary"
      variant="extended"
      aria-label="create"
      className={classes.fab}
    >
      {t("create")}
      <AddIcon />
    </Fab>
  );
};

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

export default CreateIcon;
