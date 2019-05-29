import React, { Component } from 'react';
import GameCard from './GameCard';

class GameList extends Component {
	render() {
		console.log(this.props.games, 'props.games');
		return (
			<div>
				<h1>Gamelist</h1>

				<ul>
					{this.props.game &&
						this.props.games.map(game => {
							return <h1>{game.title}</h1>;
							// return <GameCard game={game} />;
						})}
				</ul>
			</div>
		);
	}
}

export default GameList;
