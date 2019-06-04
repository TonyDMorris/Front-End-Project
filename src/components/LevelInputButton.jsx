import React from "react";
import { useTranslation } from "react-i18next";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import SnapShotCam from "./SnapShotCam";
import CircularProgress from "@material-ui/core/CircularProgress";

const LevelInputButton = ({
  wincondition,
  handleWinData,
  handleGPS,
  loading
}) => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        {wincondition === "string" && (
          <TextField
            data-cy="text-condition-input"
            variant="outlined"
            fullWidth
            label={t("Your answer")}
            onChange={e => handleWinData(e.target.value)}
          />
        )}
        {wincondition === "image" && (
          <SnapShotCam handlePhoto={handleWinData} />
        )}
        {wincondition === "gps" && (
          <Button data-cy="gps-condition-input" onClick={handleGPS}>
            {t("Send GPS")}
          </Button>
        )}
        {loading && (
          <div>
            <CircularProgress />
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default LevelInputButton;
