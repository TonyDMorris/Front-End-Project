import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Link as linkReach } from "@reach/router";
import SnapShot from "./SnapShot";
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
          <div>
            <Typography variant="h3">{this.props.title}</Typography>
            <Typography variant="h5">
              Level {this.props.curLevel + 1}
            </Typography>
            <Typography variant="h5">
              Task {this.props.gameLevel.mainclue}
            </Typography>
            {this.props.attempts === 1 && (
              <Typography variant="h5">
                Clue 1 {this.props.gameLevel.clue2}
              </Typography>
            )}
            {this.props.attempts >= 2 && (
              <div>
                <Typography variant="h5">
                  Clue 1 {this.props.gameLevel.clue2}
                </Typography>
                <Typography variant="h5">
                  Clue 2 {this.props.gameLevel.clue3}
                </Typography>
              </div>
            )}

            {this.props.changeLevelButton === false &&
              this.props.winCondition === "text" && (
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.input}
                  />
                  <button type="sumbit">Submit</button>
                </form>
              )}

            {this.props.changeLevelButton === false &&
              this.props.winCondition === "gps" && (
                <button onClick={this.handleGPS}>Check GPS</button>
              )}

            {this.props.changeLevelButton === false &&
              this.props.winCondition === "image" && (
                <div style={{ height: "100vh" }} className="App">
                  {this.state.takingPic && (
                    <SnapShot
                      handleCamera={this.handleCamera}
                      handlePhoto={this.classifyImage}
                    />
                  )}
                  {!this.state.takingPic && (
                    <button onClick={this.handleCamera}>take pic</button>
                  )}
                </div>
              )}

            {this.props.changeLevelButton && (
              <div>
                <Typography variant="h3">
                  {this.props.gameLevel.wintext}
                </Typography>
                <button onClick={this.props.changeLevel}>Next Level</button>
              </div>
            )}
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

    return vision.annotate(req).then(
      ({ responses }) => {
        const labels = responses[0].labelAnnotations.reduce((acc, curr) => {
          acc.push(curr.description);
          return acc;
        }, []);
        this.setState({ input: labels });
      },
      e => {
        console.log("Error: ", e);
      }
    );
  };
}

export default LevelDisplay;
