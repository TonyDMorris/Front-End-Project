import React from "react";
import { TextField } from "@material-ui/core";

const LevelInputButton = ({ wincondition, handleWinData }) => {
  return (
    <div>
      {wincondition === "string" && (
        <TextField
          label="Your answer:"
          onChange={e => handleWinData(e.target.value)}
        />
      )}
      {wincondition === "image" && <button>Image placeholder</button>}
    </div>
  );
};

export default LevelInputButton;
