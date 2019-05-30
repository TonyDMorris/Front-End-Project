import React from "react";
import axios from "axios";
import LevelDisplay from "./LevelDisplay";

class Play extends React.Component {
  state = {
    game: {},
    curLevel: 0,
    attempts: 0,
    changeLevelButton: false,
    answer: ""
  };

  componentDidMount() {
    const url = `https://mongo-flask-api.herokuapp.com/games?id=${
      this.props.gameid
    }`;
    axios.get(url).then(({ data }) => {
      this.setState({ game: data });
    });
  }

  render() {
    return (
      <div>
        {this.state.game.levels && (
          <LevelDisplay
            gameLevel={this.state.game.levels[this.state.curLevel]}
            curLevel={this.state.curLevel}
            changeLevel={this.changeLevel}
            attempts={this.state.attempts}
            checkAnswer={this.checkAnswer}
            checkPhotoAnswer={this.checkPhotoAnswer}
            changeLevelButton={this.state.changeLevelButton}
            title={this.state.game.title}
            numLevels={this.state.game.levels.length}
            winCondition={
              this.state.game.levels[this.state.curLevel] &&
              this.state.game.levels[this.state.curLevel].wincondition
            }
            completionMes={this.state.game.completion}
          />
        )}
        <h1>Play here!</h1>
      </div>
    );
  }

  checkAnswer = answer => {
    if (this.state.game.levels[this.state.curLevel].windata === answer) {
      this.setState(prevState => {
        return { changeLevelButton: true };
      });
    } else {
      this.setState(prevState => {
        return { attempts: prevState.attempts + 1 };
      });
    }
  };

  checkPhotoAnswer = inputArray => {
    let windata = this.state.game.levels[this.state.curLevel].windata;

    let total = [...inputArray, ...windata];
    let comparison = new Set([...windata, ...inputArray]);
    let comparisonArray = [...comparison];

    console.log(comparisonArray.length, "comparisonArray length");
    console.log(total.length, "total.length");

    if (comparisonArray.length < total.length) {
      this.setState({ changeLevelButton: true });
    } else {
      this.setState(prevState => {
        return { attempts: prevState.attempts + 1 };
      });
    }
  };

  changeLevel = prevState => {
    this.setState(prevState => {
      return {
        curLevel: prevState.curLevel + 1,
        changeLevelButton: false,
        attempts: 0
      };
    });
  };
}

export default Play;
