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
import theme from "../theme";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    width: "auto"
  },
  table: {
    maxWidth: 650
  },
  margin: {
    margin: theme.spacing(2.5)
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
        <Typography className={classes.margin} variant="h4" align="center">
          {t("WelcomeLeaderboard")}
        </Typography>
        <Typography className={classes.margin} variant="body1" align="center">
          {t("EnterNameLeaderBoard")}
        </Typography>
        <form
          className={classes.root}
          onSubmit={this.submitScore}
          className={classes.form}
          align="center"
        >
          <TextField
            id="standard-name"
            label={t("Name")}
            className={classes.margin}
            onChange={(e) => {
              this.handleInput(e.target.value);
            }}
          />
          <Button
            type="submit"
            variant="outlined"
            color="inherit"
            align="center"
            className={classes.margin}
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
                  .map((score) => (
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

  handleInput = (username) => {
    this.setState({ username });
  };

  submitScore = (e) => {
    const { username } = this.state;
    const { score, game_id } = this.props;
    const highScore = { game_id, username, score };
    e.preventDefault();
    submitScore(highScore);
    this.setState((prevState) => {
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
