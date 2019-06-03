import React from "react";
import { Router, Location } from "@reach/router";
import Header from "./components/Header";
import Home from "./components/Home";
import Create from "./components/Create";
import Play from "./components/Play";
import Axios from "axios";
import { getGames } from "./Api/Api";
class App extends React.Component {
  state = {};

  componentDidMount = () => {
    getGames().then(games => {
      this.setState({ games });
    });
  };

  render() {
    return (
      <div className="App">
        <Location>{({ location }) => <Header location={location} />}</Location>
        <Router>
          <Home path="/" games={this.state.games} />
          <Create path="/create" />
          <Play path="/play/:gameid" />
        </Router>
      </div>
    );
  }
}

export default App;
