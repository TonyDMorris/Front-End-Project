import React, { useState } from "react";
import { Link as linkReach } from "@reach/router";
import { useTranslation } from "react-i18next";
import { Typography, Link, Grid, Button } from "@material-ui/core";
import LeaderBoard from "./LeaderBoard";
const WinScreen = props => {
  const { t } = useTranslation();
  const [showLB, changeLB] = useState(false);
  return !showLB ? (
    <div />
  ) : (
    <div>
      <h1>{props.completionMes}</h1>
      <Link component={linkReach} to="/">
        {t("Home")}
      </Link>
      <br />
      <Link component={linkReach} to="/create">
        {t("Create Your Game")}
      </Link>
      <LeaderBoard game_id={props.game_id} score={props.score} />
    </div>
  );
};

export default WinScreen;
