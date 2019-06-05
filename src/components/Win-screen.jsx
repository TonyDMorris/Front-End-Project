import React, { useState } from "react";
import { Link as linkReach } from "@reach/router";
import { useTranslation } from "react-i18next";
import { Typography, Link, Grid, Button } from "@material-ui/core";
import LeaderBoard from "./LeaderBoard";
import pirate from "../pirate.png";

const WinScreen = props => {
  const { t } = useTranslation();
  const [showLB, changeLB] = useState(false);
  return !showLB ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column"
      }}
    >
      <img src={pirate} style={{ maxWidth: "100vw", alignSelf: "center" }} />

      <Typography variant="h3" align="center">
        {props.completionMes}
      </Typography>
      <Grid item xs={12} style={{ justifyContent: "center" }}>
        <Grid container alignItems="center" justify="center">
          <Button
            type="submit"
            variant="outlined"
            color="inherit"
            align="center"
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

export default WinScreen;
