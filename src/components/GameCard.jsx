import React from 'react';
import { Link } from '@reach/router';
import { Card } from '@material-ui/core';

const GameCard = (props) => {
  const { game } = props;
  return (
    <div>
      <Card>
        <Link to={`/play/${game.title}`}>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
          <p>levels: {game.levels.length()}</p>
        </Link>
      </Card>
    </div>
  );
};

export default GameCard;
