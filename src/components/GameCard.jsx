import React from 'react';
import { Link } from '@reach/router';

const GameCard = props => {
	const { game } = props;
	return (
		<div>
			<Link to={`/play/${game.title}`}>
				<h1>{game.title}</h1>
				<p>{game.description}</p>
				<p>levels: {game.levels.length}</p>
			</Link>
		</div>
	);
};

export default GameCard;
