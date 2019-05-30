import React from "react";
import { TextField } from "@material-ui/core";
import SnapShotCam from "./SnapShotCam";
const LevelInputButton = ({ wincondition, handleWinData }) => {
  return (
    <div>
      {wincondition === "string" && (
        <TextField
          label="Your answer:"
          onChange={e => handleWinData(e.target.value)}
        />
      )}
      {wincondition === "image" && <SnapShotCam handlePhoto={handleWinData} />}
    </div>
  );
};

export default LevelInputButton;
