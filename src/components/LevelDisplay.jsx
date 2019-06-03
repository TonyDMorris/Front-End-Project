import React from "react";
import { Typography, Link } from "@material-ui/core";
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
    location: "",
    takingPic: false
  };
  render() {
    const { t } = this.props;
    return (
      <div>
        {this.props.curLevel <= this.props.numLevels - 1 ? (
          <div>
            <Typography variant="h3">{this.props.title}</Typography>
            <Typography variant="h5">
              {t("Level")} {this.props.curLevel + 1}
            </Typography>
            <Typography variant="h5">
              {t("Task")} {this.props.gameLevel.mainclue}
            </Typography>
            {this.props.attempts === 1 && (
              <Typography variant="h5">
                {t("Clue 1")} {this.props.gameLevel.clue2}
              </Typography>
            )}
            {this.props.attempts >= 2 && (
              <div>
                <Typography variant="h5">
                  {t("Clue 1")} {this.props.gameLevel.clue2}
                </Typography>
                <Typography variant="h5">
                  {t("Clue 2")} {this.props.gameLevel.clue3}
                </Typography>
              </div>
            )}

            {this.props.changeLevelButton === false &&
              this.props.winCondition === "string" && (
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.input}
                  />

                  <button type="sumbit">{t("Submit")}</button>
                </form>
              )}

            {this.props.changeLevelButton === false &&
              this.props.winCondition === "gps" && (
                <div>
                  <button onClick={this.handleGPS}>{t("Check GPS")}</button>
                </div>
              )}

            {this.props.changeLevelButton === false &&
              this.props.winCondition === "image" && (
                <div style={{ height: "100vh" }} className="App">
                  {this.state.takingPic && (
                    <SnapShotCam
                      handleCamera={this.handleCamera}
                      handlePhoto={this.handleImage}
                    />
                  )}
                  {!this.state.takingPic && (
                    <button onClick={this.handleCamera}>{t("take pic")}</button>
                  )}
                </div>
              )}

            {this.props.changeLevelButton && (
              <div>
                <Typography variant="h3">
                  {this.props.gameLevel.wintext}
                </Typography>
                <button onClick={this.props.changeLevel}>
                  {t("Next Level")}
                </button>
              </div>
            )}
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

  handleImage = base64Img => {
    this.setState({ loading: true });
    classifyImage(base64Img).then(labels => {
      this.setState({ input: labels }, () => {
        this.props.checkPhotoAnswer(this.state.input);
      });
    });
  };
}

export default withTranslation()(LevelDisplay);
