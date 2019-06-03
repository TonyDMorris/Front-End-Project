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
    const { classes } = this.props;
    return (
      <div>
        <Typography variant='h4'>Welcome to the leaderboard!</Typography>
        <Typography variant='body1'>
          Please enter your name to add your score to the leaderboard!
        </Typography>
        <form onSubmit={this.submitScore} className={classes.form}>
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

        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell align='right'>Score</TableCell>
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
                      <TableCell component='th' scope='row'>
                        {score.username}
                      </TableCell>
                      <TableCell align='right'>{score.score}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  submitScore = e => {
    console.log("submitSccore");
    e.preventDefault();
    Axios.patch("https://mongo-flask-api.herokuapp.com/leaderboards", {
      game_id: this.props.game_id,
      username: this.state.input,
      score: this.props.score
    });
    this.setState(prevState => {
      const newBoard = [
        { username: this.state.input, score: this.props.score },
        ...prevState.leaderBoard
      ];
      return { leaderBoard: newBoard };
    });
  };
}

LeaderBoard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeaderBoard);
