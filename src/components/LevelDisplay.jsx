import React from "react";
import { Typography, Link, Grid, Button } from "@material-ui/core";
import { Link as linkReach } from "@reach/router";
import SnapShotCam from "./SnapShotCam";
import vision from "react-cloud-vision-api";
vision.init({ auth: "AIzaSyB6nHUETOWX7cGDQdqv9dokDb8oXVZN-f0" });

class LevelDisplay extends React.Component {
  state = {
    input: "",
    location: "",
    takingPic: false
  };

  render() {
    return (
      <div>
        {this.props.curLevel <= this.props.numLevels - 1 ? (
          <div className="root">
            <Grid
              container
              spacing={6}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <div style={{ fontFamily: "Italianno", fontSize: "50px" }}>
                  {this.props.title}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div style={{ fontFamily: "Italianno", fontSize: "50px" }}>
                  Level {this.props.curLevel + 1}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div style={{ fontFamily: "Italianno", fontSize: "50px" }}>
                  Task {this.props.gameLevel.mainclue}
                </div>
              </Grid>
              {this.props.attempts === 1 && (
                <div style={{ fontFamily: "Italianno", fontSize: "50px" }}>
                  Clue 1 {this.props.gameLevel.clue2}
                </div>
              )}
              {this.props.attempts >= 2 && (
                <Grid item xs={12}>
                  <div>
                    <div
                      style={{
                        fontFamily: "Italianno",
                        fontSize: "50px"
                      }}
                    >
                      Clue 1 {this.props.gameLevel.clue2}
                    </div>

                    <div
                      style={{
                        fontFamily: "Italianno",
                        fontSize: "50px"
                      }}
                    >
                      Clue 2 {this.props.gameLevel.clue3}
                    </div>
                  </div>
                </Grid>
              )}

              {this.props.changeLevelButton === false &&
                this.props.winCondition === "string" && (
                  <form onSubmit={this.handleSubmit}>
                    <Grid item xs={12}>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.input}
                      />{" "}
                    </Grid>
                    <br />
                    <Grid item xs={12} style={{ justifyContent: "center" }}>
                      <Grid container alignItems="center" justify="center">
                        <Button
                          type="submit"
                          variant="outlined"
                          color="inherit"
                        >
                          Submit
                        </Button>
                      </Grid>
                      {/* <button type="sumbit">Submit</button> */}
                    </Grid>
                  </form>
                )}

              {this.props.changeLevelButton === false &&
                this.props.winCondition === "gps" && (
                  <Grid item xs={12}>
                    <div>
                      <Button
                        onClick={this.handleGPS}
                        variant="outlined"
                        color="inherit"
                      >
                        Check GPS
                      </Button>
                      {/* <button onClick={this.handleGPS}>Check GPS</button> */}
                    </div>
                  </Grid>
                )}

              {this.props.changeLevelButton === false &&
                this.props.winCondition === "image" && (
                  <div style={{ height: "100vh" }} className="App">
                    {this.state.takingPic && (
                      <SnapShotCam
                        handleCamera={this.handleCamera}
                        handlePhoto={this.classifyImage}
                      />
                    )}
                    {!this.state.takingPic && (
                      // <Button
                      //   variant="outlined"
                      //   color="inherit"
                      //   onClick={this.handleCamera}
                      // >
                      //   Take Pic
                      //   {/* <button onClick={this.handleCamera}>Take Pic</button> */}
                      // </Button>
                      <SnapShotCam />
                    )}
                  </div>
                )}

              {this.props.changeLevelButton && (
                <div>
                  <div
                    style={{ "font-family": "Italianno", "font-size": "50px" }}
                  >
                    {this.props.gameLevel.wintext}
                  </div>
                  <Button onClick={this.props.changeLevel}>Next Level</Button>
                  {/* <button onClick={this.props.changeLevel}>Next Level</button> */}
                </div>
              )}
            </Grid>
          </div>
        ) : (
          <div>
            <h1>{this.props.completionMes}</h1>
            <Link component={linkReach} to="/">
              Home
            </Link>
            <br />
            <Link component={linkReach} to="/create">
              Create your own game
            </Link>
          </div>
        )}
      </div>
    );
  }

  handleCamera = () => {
    this.setState({ takingPic: !this.state.takingPic });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleGPS = e => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState(
        {
          location: `${position.coords.latitude.toFixed(
            4
          )},${position.coords.longitude.toFixed(4)}`
        },
        () => {
          this.props.checkAnswer(this.state.location);
        }
      );
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.checkAnswer(this.state.input);
    this.setState({ input: "" });
  };

  classifyImage = base64Img => {
    const vision = require("react-cloud-vision-api");
    vision.init({ auth: "AIzaSyB6nHUETOWX7cGDQdqv9dokDb8oXVZN-f0" });
    const req = new vision.Request({
      image: new vision.Image({
        base64: base64Img
      }),
      features: [new vision.Feature("LABEL_DETECTION", 10)]
    });

    this.setState({ loading: true });

    return vision.annotate(req).then(
      ({ responses }) => {
        const labels = responses[0].labelAnnotations.reduce((acc, curr) => {
          acc.push(curr.description);
          return acc;
        }, []);
        this.setState({ input: labels }, () => {
          this.props.checkPhotoAnswer(this.state.input);
        });
      },
      e => {
        console.log("Error: ", e);
      }
    );
  };
}

export default LevelDisplay;
