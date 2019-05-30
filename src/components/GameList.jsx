import React, { Component } from "react";
import GameCard from "./GameCard";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  gameCard: {
    padding: "20px"
  }
};

class GameList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          {this.props.games &&
            this.props.games.map(game => {
              return (
                <Paper className={classes.gameCard} key={game.id}>
                  <GameCard game={game} />
                </Paper>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(GameList);
