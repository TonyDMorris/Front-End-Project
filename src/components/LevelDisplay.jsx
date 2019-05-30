import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Link as linkReach } from "@reach/router";

class LevelDisplay extends React.Component {
  state = {
    input: ""
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

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleGPS = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.checkAnswer(this.state.input);
    this.setState({ input: "" });
  };
}

export default LevelDisplay;
