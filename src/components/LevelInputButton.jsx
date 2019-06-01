import React from "react";
import { TextField, Button } from "@material-ui/core";
import SnapShotCam from "./SnapShotCam";
import CircularProgress from "@material-ui/core/CircularProgress";

const LevelInputButton = ({
  wincondition,
  handleWinData,
  handleGPS,
  loading
}) => {
  return (
    <div>
      {wincondition === "string" && (
        <TextField
          label="Your answer:"
          onChange={e => handleWinData(e.target.value)}
        />
      )}
      {wincondition === "image" && <SnapShotCam handlePhoto={handleWinData} />}
      {wincondition === "gps" && <Button onClick={handleGPS}>Send GPS</Button>}
      {loading && (
        <div>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default LevelInputButton;
