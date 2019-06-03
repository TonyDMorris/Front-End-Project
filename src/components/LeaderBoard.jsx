import React, { Component } from "react";
import Axios from "axios";
import { Typography, TextField, Button } from "@material-ui/core";

class LeaderBoard extends Component {
  state = {
    leaderBoard: null
  };

  componentDidMount() {
    Axios.get(
      `https://mongo-flask-api.herokuapp.com/leaderboards?game_id=${
        this.props.game_id
      }`
    )
      .then(({ data }) => {
        console.log(data);
        this.setState({ leaderBoard: data.leaderBoard });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Typography variant='h4'>Welcome to the leaderboard!</Typography>
        <Typography variant='body1'>
          Please enter your name to add your score to the leaderboard!
        </Typography>
        <form onSubmit={this.submitScore}>
          <TextField
            id='standard-name'
            label='Name'
            margin='normal'
            onChange={this.handleInput}
          />
          <Button onClick={this.submitScore}>Submit Score!</Button>
        </form>
        {this.state.leaderBoard &&
          this.state.leaderBoard
            .sort((a, b) => {
              return b.score - a.score;
            })
            .map(score => {
              return (
                <div key={Math.random()}>
                  {score.username}
                  {score.score}
                </div>
              );
            })}
      </div>
    );
  }

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  submitScore = e => {
    console.log("submitSccore");
    e.preventDefault();
    this.setState(prevState => {
      const newBoard = [
        { username: this.state.input, score: this.props.score },
        ...prevState.leaderBoard
      ];
      return { leaderBoard: newBoard };
    });
    Axios.patch("https://mongo-flask-api.herokuapp.com/leaderboards", {
      game_id: this.props.game_id,
      username: this.state.input,
      score: this.props.score
    });
  };
}

export default LeaderBoard;
