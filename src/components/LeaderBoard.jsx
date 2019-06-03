import React, { Component } from "react";
import Axios from "axios";
import { Typography, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getLeaderBoard, submitScore } from "../Api/Api";
const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    width: "90%"
    // marginTop: theme.spacing(3)
  },
  table: {
    maxWidth: 650
  }
};

class LeaderBoard extends Component {
  state = {
    leaderBoard: []
  };

  componentDidMount() {
    const { game_id } = this.props;
    getLeaderBoard(game_id).then(leaderBoard => {
      this.setState({ leaderBoard });
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h4">Welcome to the leaderboard!</Typography>
        <Typography variant="body1">
          Please enter your name to add your score to the leaderboard!
        </Typography>
        <form onSubmit={this.submitScore} className={classes.form}>
          <TextField
            id="standard-name"
            label="Name"
            margin="normal"
            onChange={e => {
              this.handleInput(e.target.value);
            }}
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

        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.leaderBoard &&
                this.state.leaderBoard
                  .sort((a, b) => {
                    return b.score - a.score;
                  })
                  .map(score => (
                    <TableRow key={score.username}>
                      <TableCell component="th" scope="row">
                        {score.username}
                      </TableCell>
                      <TableCell align="right">{score.score}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  handleInput = username => {
    this.setState({ username });
  };

  submitScore = e => {
    const { username } = this.state;
    const { score, game_id } = this.props;
    const highScore = { game_id, username, score };
    e.preventDefault();
    submitScore(highScore);
    this.setState(prevState => {
      const leaderBoard = [highScore, ...prevState.leaderBoard];
      return { leaderBoard };
    });
  };
}

LeaderBoard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeaderBoard);
