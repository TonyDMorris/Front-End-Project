import React, { Component } from "react";
import LevelInputButton from "./LevelInputButton";
import {
  Card,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Fab,
  Grid,
  Container,
  CssBaseline
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import vision from "react-cloud-vision-api";
vision.init({ auth: "AIzaSyB6nHUETOWX7cGDQdqv9dokDb8oXVZN-f0" });

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
      <Container>
        <CssBaseline />

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              value={mainclue}
              label="Main clue:"
              onChange={(e) => this.handleChange("mainclue", e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              value={clue2}
              label="Second clue:"
              onChange={(e) => this.handleChange("clue2", e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              value={clue3}
              label="Third clue:"
              onChange={(e) => this.handleChange("clue3", e.target.value)}
            />
          </Grid>

          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  value="text"
                  onClick={(e) => this.handleCheck("string")}
                  checked={wincondition === "string"}
                />
              }
              label="Text"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="image"
                  onClick={(e) => this.handleCheck("image")}
                  checked={wincondition === "image"}
                />
              }
              label="Image"
            />
          </FormGroup>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              value={wintext}
              label="Level completion message:"
              onChange={(e) => this.handleChange("wintext", e.target.value)}
            />
          </Grid>
        </Grid>

        {wincondition && mainclue && clue2 && clue3 && wintext && windata && (
          <Fab
            onClick={() => {
              this.props.handleLevel(this.state);
              this.setState({
                wincondition: "string",
                mainclue: "",
                clue2: "",
                clue3: "",
                wintext: "",
                windata: ""
              });
            }}
            color="primary"
            aria-label="Add"
            variant="extended"
          >
            <AddIcon />
            Add Level
          </Fab>
        )}
        <LevelInputButton
          wincondition={wincondition}
          handleWinData={this.handleWinData}
        />
      </Container>
    );
  }
  handleCheck = (winCon) => {
    this.setState({ wincondition: winCon });
  };

  handleChange = (str, value) => {
    this.setState({ [str]: value });
  };

  handleWinData = (value) => {
    const { wincondition } = this.state;
    if (wincondition === "string") {
      this.setState({ windata: value });
    }
    if (wincondition === "image") {
      return this.classifyImage(value).then((labels) => {
        this.setState({ windata: labels });
      });
    }
  };
  classifyImage = (base64Img) => {
    const vision = require("react-cloud-vision-api");
    vision.init({ auth: "AIzaSyB6nHUETOWX7cGDQdqv9dokDb8oXVZN-f0" });
    const req = new vision.Request({
      image: new vision.Image({
        base64: base64Img
      }),
      features: [new vision.Feature("LABEL_DETECTION", 10)]
    });

    return vision.annotate(req).then(
      ({ responses }) => {
        const labels = responses[0].labelAnnotations.reduce((acc, curr) => {
          acc.push(curr.description);
          return acc;
        }, []);
        return labels;
      },
      (e) => {
        console.log("Error: ", e);
      }
    );
  };
}
export default Form;
