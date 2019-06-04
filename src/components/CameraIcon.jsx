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

function CameraIcon(props) {
  const classes = useStyles();
  return (
    <Fab
      size="small"
      color={props.clicked ? "secondary" : "primary"}
      variant="round"
      aria-label="camera"
      className={classes.fab}
    >
      <SvgIcon>
        <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
      </SvgIcon>
    </Fab>
  );
}

export default CameraIcon;
