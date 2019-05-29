import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import GameList from './GameList';

const style = {
	wrapper: {
		display: 'flexbox',
		textAlign: 'center',
	},
	title: {
		margin: '3vh 0vh',
	},
	blurb: {
		margin: '6vh 10vw',
	},
};

function Home(props) {
	const { classes } = props;
	return (
		<div className={classes.wrapper}>
			<Typography variant="h1" className={classes.title}>
				TheHunt
			</Typography>
			<Typography variant="body1" className={classes.blurb}>
				Welcome to TheHunt, where you can challenge your friends to hunt pretty much whatever you want! Set some
				clues (as hard or as easy as you like), find some objects, beat your friends! Can you find everything
				without using any clues?? Pick one of the games, or create your own!
			</Typography>
			<GameList games={props.games} />
		</div>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Home);
