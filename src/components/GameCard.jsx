import React from 'react';
import { Link as ReachLink } from '@reach/router';
import { Card, Link } from '@material-ui/core';

const GameLink = React.forwardRef((props, ref) => (
  <ReachLink innerRef={ref} {...props} />
));

const GameCard = (props) => {
  const { game } = props;
  console.log(game);
  return (
    <div>
      <Card>
        <Link component={GameLink} to={`/play/${game.id}`}>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
          <p>levels: {game.levels.length}</p>
        </Link>
      </Card>
    </div>
  );
};

export default GameCard;
