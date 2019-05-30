import React, { Component } from "react";
import {
  Card,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

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
    const { wincondition } = this.state;
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
      </Card>
    );
  }
  handleCheck = winCon => {
    this.setState({ wincondition: winCon });
  };

  handleChange = (str, value) => {
    this.setState({ [str]: value });
  };
}
export default Form;

//props == handleLevel

//next level
// checkbox img txt gps sound

// main clue

// 2nd clue

// 3rd clue

//win txt

//buttoncamsoundgps component
