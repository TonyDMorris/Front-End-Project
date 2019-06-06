import React from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import SnapShotCam from "./SnapShotCam";
import CircularProgress from "@material-ui/core/CircularProgress";

const LevelInputButton = ({
  updateWinData,
  windata,
  wincondition,
  handleWinData,
  handleGPS,
  loading
}) => {
  const { t } = useTranslation();
  return (
    // <Grid
    //   container
    //   // spacing={4}
    //   direction="column"
    //   alignItems="center"
    //   justify="center"
    // >
    <Grid item xs>
      {wincondition === "string" && (
        <TextField
          value={windata}
          fullWidth
          InputLabelProps={{
            style: {
              color: "black"
            }
          }}
          label={t("Your answer")}

          onChange={e => updateWinData(e.target.value)}

          // style={{ width: 328 }}
        />
      )}
      {wincondition === "image" && <SnapShotCam handlePhoto={handleWinData} />}
      {wincondition === "gps" && (

        <Button variant="outlined" color="inherit" onClick={handleGPS}>

          {t("Send GPS")}
        </Button>
      )}
      {loading && (
        <div>
          <CircularProgress />
        </div>
      )}
    </Grid>
    // </Grid>
  );
};

export default LevelInputButton;
