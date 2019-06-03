import React from "react";

import LevelDisplay from "./LevelDisplay";
import { withTranslation } from "react-i18next";
import { getGame } from "../Api/Api";
class Play extends React.Component {
  state = {
    game: {},
    curLevel: 0,
    attempts: 0,
    changeLevelButton: false,
    answer: "",
    score: null
  };

  componentDidMount() {
    const { gameid } = this.props;
    getGame(gameid).then(game => {
      const score = game.levels.length * 3;
      this.setState({ game, score });
    });
  }

  render() {
    const { t } = this.props;
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
            game_id={this.props.gameid}
            score={this.state.score}
          />
        )}
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
        return { attempts: prevState.attempts + 1, score: prevState.score - 1 };
      });
    }
  };

  checkPhotoAnswer = inputArray => {
    let windata = this.state.game.levels[this.state.curLevel].windata;

    let total = [...inputArray, ...windata];
    let comparison = new Set([...windata, ...inputArray]);
    let comparisonArray = [...comparison];

    if (comparisonArray.length < total.length) {
      this.setState({ changeLevelButton: true });
    } else {
      this.setState(prevState => {
        return { attempts: prevState.attempts + 1, score: prevState.score - 1 };
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

export default withTranslation()(Play);
