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
    console.log(this.props);
    return (
      <div>
        {this.state.game.levels && (
          <LevelDisplay
            gameLevel={this.state.game.levels[this.state.curLevel]}
            curLevel={this.state.curLevel}
            changeLevel={this.changeLevel}
            attempts={this.state.attempts}
            changeAttempts={this.changeAttempts}
            checkAnswer={this.checkAnswer}
            changeLevelButton={this.state.changeLevelButton}
          />
        )}
        <h1>Play here!</h1>
      </div>
    );
  }

  changeAttempts = () => {
    this.setState(prevState => {
      return { attempts: prevState.attempts + 1 };
    });
  };

  checkAnswer = answer => {
    if (this.state.game.levels[this.state.curLevel].windata === answer) {
      this.setState(prevState => {
        return { changeLevelButton: true, curLevel: prevState.curLevel + 1 };
      });
    }
  };

  changeLevel = prevState => {
    this.setState(prevState => {
      return { curLevel: prevState.curLevel + 1 };
    });
  };
}

export default Play;
