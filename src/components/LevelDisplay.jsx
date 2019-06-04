import React from "react";
import { Typography, Link, Grid, Button } from "@material-ui/core";
import { Link as linkReach } from "@reach/router";
import SnapShotCam from "./SnapShotCam";
import vision from "react-cloud-vision-api";
import { classifyImage } from "../Api/Api";
import LeaderBoard from "./LeaderBoard";

import { withTranslation } from "react-i18next";

vision.init({ auth: "AIzaSyB6nHUETOWX7cGDQdqv9dokDb8oXVZN-f0" });

class LevelDisplay extends React.Component {
  state = {
    input: "",
    location: ""
  };

  render() {
    const { t } = this.props;
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
                <Typography variant="h3" align="center">
                  {this.props.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">
                  {t("Level")} {this.props.curLevel + 1}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  {t("Task")} {this.props.gameLevel.mainclue}
                </Typography>
              </Grid>
              {this.props.attempts === 1 && (
                <Typography variant="h5">
                  {t("Clue 1")} {this.props.gameLevel.clue2}
                </Typography>
              )}
              {this.props.attempts >= 2 && (
                <Grid item xs={12}>
                  <div>
                    <Typography variant="h5">
                      {t("Clue 1")} {this.props.gameLevel.clue2}
                    </Typography>

                    <Typography variant="h5">
                      {t("Clue 2")} {this.props.gameLevel.clue3}
                    </Typography>
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
                          align="center"
                        >
                          {t("Submit")}
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
                      {this.props.distanceAway && (
                        <Typography variant="h6">
                          You are about {this.props.distanceAway}m away!
                        </Typography>
                      )}
                    </div>
                  </Grid>
                )}

              {this.props.changeLevelButton === false &&
                this.props.winCondition === "image" && (
                  <div style={{ height: "100vh" }} className="App">
                    <SnapShotCam handlePhoto={this.handleImage} />
                  </div>
                )}

              {this.props.changeLevelButton && (
                <div>
                  <Typography>{this.props.gameLevel.wintext}</Typography>

                  <Button onClick={this.props.changeLevel}>
                    {t("Next Level")}
                  </Button>
                  {/* <button onClick={this.props.changeLevel}>Next Level</button> */}
                </div>
              )}
            </Grid>
          </div>
        ) : (
          <div>
            <h1>{this.props.completionMes}</h1>

            <Link component={linkReach} to="/">
              {t("Home")}
            </Link>
            <br />
            <Link component={linkReach} to="/create">
              {t("Create Your Game")}
            </Link>
            <LeaderBoard
              game_id={this.props.game_id}
              score={this.props.score}
            />
          </div>
        )}
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleGPS = (e) => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
        {
          location: `${position.coords.latitude.toFixed(
            4
          )},${position.coords.longitude.toFixed(4)}`
        },
        () => {
          this.props.checkGPSAnswer(this.state.location);
        }
      );
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.checkAnswer(this.state.input);
    this.setState({ input: "" });
  };

  handleImage = (base64Img) => {
    this.setState({ loading: true });
    classifyImage(base64Img).then((labels) => {
      this.setState({ input: labels }, () => {
        this.props.checkPhotoAnswer(this.state.input);
      });
    });
  };
}

export default withTranslation()(LevelDisplay);
