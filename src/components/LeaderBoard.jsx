import React, { Component } from "react";
import chest from "../chest.png";
import {
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { getLeaderBoard, submitScore } from "../Api/Api";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    width: "auto",
    backgroundImage: `url(${chest})`,
    backgroundSize: "cover"
  },
  table: {
    maxWidth: 650
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center"
  },
  table: {
    backgroundColor: "rgba(255,255,255,0.75)"
  }
};

class LeaderBoard extends Component {
  state = {
    leaderBoard: []
  };

  componentDidMount() {
    const { game_id } = this.props;
    getLeaderBoard(game_id).then((leaderBoard = []) => {
      this.setState({ leaderBoard });
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant='h4'>Welcome to the leaderboard!</Typography>
        <Typography variant='body1'>
          Please enter your name to add your score to the leaderboard!
        </Typography>

        <form onSubmit={this.submitScore}>
          <div className={classes.form}>
            <TextField
              id='standard-name'
              label='Name'
              margin='normal'
              onChange={e => {
                this.handleInput(e.target.value);
              }}
            />
            <Button
              style={{
                marginTop: "auto"
              }}
              onClick={this.submitScore}
              variant='outlined'
              color='inherit'
            >
              Submit Score!
            </Button>
          </div>
        </form>

        <Paper className={classes.root} style={{}}>
          <Table style={{}} className={classes.table}>
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
      console.log(prevState);
      const leaderBoard = [highScore, ...prevState.leaderBoard];
      return { leaderBoard };
    });
  };
}

LeaderBoard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeaderBoard);
