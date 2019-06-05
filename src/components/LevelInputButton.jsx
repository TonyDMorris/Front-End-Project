import React from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
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
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs>
        {wincondition === "string" && (
          <TextField
            //variant="outlined"
            fullWidth
            label={t("Your answer")}
            onChange={e => handleWinData(e.target.value)}
            style={{ width: 328 }}
          />
        )}
        {wincondition === "image" && (
          <SnapShotCam handlePhoto={handleWinData} />
        )}
        {wincondition === "gps" && (
          <Button variant="outlined" onClick={handleGPS}>
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
