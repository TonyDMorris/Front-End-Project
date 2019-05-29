import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import GameList from './GameList';

const style = {
	wrapper: {},
};

function Home(props) {
	const { classes } = props;
	return (
		<div className={classes.wrapper}>
			<Typography variant="h1">Title</Typography>
			<GameList games={props.games} />
		</div>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Home);
