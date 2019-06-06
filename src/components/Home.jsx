import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import GameList from "./GameList";
import { useTranslation } from "react-i18next";

const style = {
  wrapper: {
    display: "flexbox",
    textAlign: "center"
  },
  title: {
    margin: "3vh 0vh"
  },
  blurb: {
    margin: "6vh 10vw"
  }
};

function Home(props) {
  const { t } = useTranslation();
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Typography variant="h2" className={classes.title}>
        <img alt="logo" src={require("../mainLogo.png")} />
      </Typography>
      <Typography variant="h6" className={classes.blurb}>
        {t("introduction paragraph")}
      </Typography>
      <GameList games={props.games} />
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(Home);
