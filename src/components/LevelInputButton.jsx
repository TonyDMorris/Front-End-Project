import React from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import SnapShotCam from "./SnapShotCam";
import CircularProgress from "@material-ui/core/CircularProgress";

const LevelInputButton = ({
  wincondition,
  handleWinData,
  handleGPS,
  loading
}) => {
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
            label="Your answer:"
            onChange={e => handleWinData(e.target.value)}
          />
        )}
        {wincondition === "image" && (
          <SnapShotCam handlePhoto={handleWinData} />
        )}
        {wincondition === "gps" && (
          <Button onClick={handleGPS}>Send GPS</Button>
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
