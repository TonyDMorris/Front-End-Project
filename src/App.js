import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Home from './components/Home';
import Create from './components/Create';
import Play from './components/Play';
import Axios from 'axios';

class App extends React.Component {
	state = {};

	componentDidMount = () => {
		Axios.get('https://mongo-flask-api.herokuapp.com/gameslist').then(({ data }) => {
			this.setState({ games: data });
		});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Router>
					<Home path="/" games={this.state.games} />
					<Create path="/create" />
					<Play path="/play" />
				</Router>
			</div>
		);
	}
}

export default App;
