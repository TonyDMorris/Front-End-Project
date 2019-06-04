import React from "react";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

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
    margin: theme.spacing(1),
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#DE0404"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

function TextIcon(props) {
  const classes = useStyles();
  return (
    <Fab
      size="small"
      color={props.clicked ? "secondary" : "primary"}
      variant="round"
      aria-label="text"
      className={classes.fab}
    >
      <SvgIcon>
        <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
      </SvgIcon>
    </Fab>
  );
}

export default TextIcon;
