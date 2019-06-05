import React, { useState } from "react";
import { Link as linkReach } from "@reach/router";
import { useTranslation } from "react-i18next";
import { Typography, Link, Grid, Button, withStyles } from "@material-ui/core";
import LeaderBoard from "./LeaderBoard";
import pirate from "../pirate.png";
import { PropTypes } from "prop-types";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center"
  },
  img: {
    maxWidth: "100%",
    alignSelf: "center",
    objectFit: "contain"
  }
};

const WinScreen = props => {
  const { t } = useTranslation();
  const [showLB, changeLB] = useState(false);
  const { classes } = props;
  return !showLB ? (
    <div className={classes.container}>
      <img src={pirate} className={classes.img} />

      <Typography variant='h3' align='center'>
        {props.completionMes}
      </Typography>
      <Grid item xs={12} style={{ justifyContent: "center" }}>
        <Grid container alignItems='center' justify='center'>
          <Button
            type='submit'
            variant='outlined'
            color='inherit'
            align='center'
            onClick={() => {
              changeLB(!showLB);
            }}
          >
            {t("High Scores")}
          </Button>
        </Grid>
      </Grid>
    </div>
  ) : (
    <LeaderBoard game_id={props.game_id} score={props.score} />
  );
};

export default withStyles(style)(WinScreen);
