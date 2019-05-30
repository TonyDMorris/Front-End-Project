import React, { Component } from "react";
import LevelInputButton from "./LevelInputButton";
import {
  Card,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

class Form extends Component {
  state = {
    wincondition: "string",
    mainclue: "",
    clue2: "",
    clue3: "",
    wintext: "",
    windata: ""
  };
  render() {
    const {
      wincondition,
      mainclue,
      clue2,
      clue3,
      wintext,
      windata
    } = this.state;
    return (
      <Card>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                value="text"
                onClick={e => this.handleCheck("string")}
                checked={wincondition === "string"}
              />
            }
            label="Text"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="image"
                onClick={e => this.handleCheck("image")}
                checked={wincondition === "image"}
              />
            }
            label="Image"
          />
        </FormGroup>
        <TextField
          label="Main clue:"
          onChange={e => this.handleChange("mainclue", e.target.value)}
        />
        <TextField
          label="Second clue:"
          onChange={e => this.handleChange("clue2", e.target.value)}
        />
        <TextField
          label="Third clue:"
          onChange={e => this.handleChange("clue3", e.target.value)}
        />
        <TextField
          label="Level completion message:"
          onChange={e => this.handleChange("wintext", e.target.value)}
        />
        {wincondition && mainclue && clue2 && clue3 && wintext && windata && (
          <Fab color="primary" aria-label="Add" variant="extended">
            <AddIcon />
            Add Level
          </Fab>
        )}
        <LevelInputButton
          wincondition={wincondition}
          handleWinData={this.handleWinData}
        />
      </Card>
    );
  }
  handleCheck = winCon => {
    this.setState({ wincondition: winCon });
  };

  handleChange = (str, value) => {
    this.setState({ [str]: value });
  };

  handleWinData = value => {
    const { wincondition } = this.state;
    if (wincondition === "string") {
      this.setState({ windata: value });
    }
    if (wincondition === "image") {
      console.log(value);
    }
  };
}
export default Form;

//props == handleLevel

//next level
// checkbox  gps sound

//buttoncamsoundgps component
