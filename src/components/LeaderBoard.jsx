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
import { withTranslation } from "react-i18next";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    width: "auto"
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
    getLeaderBoard(game_id).then((leaderBoard = []) => {
      this.setState({ leaderBoard });
    });
  }
  render() {
    const { classes, t } = this.props;
    return (
      <div>
        <Typography variant="h4">{t("WelcomeLeaderboard")}</Typography>
        <Typography variant="body1">{t("EnterNameLeaderBoard")}</Typography>
        <form
          className={classes.root}
          onSubmit={this.submitScore}
          className={classes.form}
        >
          <TextField
            id="standard-name"
            label={t("Name")}
            //margin="normal"
            onChange={e => {
              this.handleInput(e.target.value);
            }}
          />
          <Button
            //marginTop="normal"
            type="submit"
            variant="outlined"
            color="inherit"
            align="center"
            onClick={this.submitScore}
          >
            {t("Submit Score")}
          </Button>
        </form>

        <Paper
          className={classes.root}
          style={{
            backgroundImage: `url(${chest})`,
            backgroundSize: "cover"
          }}
        >
          <Table
            style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
            className={classes.table}
          >
            <TableHead>
              <TableRow>
                <TableCell>{t("Username")}</TableCell>
                <TableCell align="right">{t("Score")}</TableCell>
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
      console.log(prevState);
      const leaderBoard = [highScore, ...prevState.leaderBoard];
      return { leaderBoard };
    });
  };
}

LeaderBoard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withTranslation()(withStyles(styles)(LeaderBoard));
