import React from "react";
import "./style.css";
import theme from "./theme.js";
import { Router, Location } from "@reach/router";
import Header from "./components/Header";
import Home from "./components/Home";
import Create from "./components/Create";
import Play from "./components/Play";
import { getGames } from "./Api/Api";
import { Container } from "@material-ui/core/";
import test3 from "./test3.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${test3})`,
    width: "100%",
    margin: "0px"
  }
};

class App extends React.Component {
  state = {};

  componentDidMount = () => {
    getGames().then((games) => {
      this.setState({ games });
    });
  };

  render() {
    return (
      <div className="App">
        <Container theme={theme}>
          <Location>
            {({ location }) => <Header location={location} />}
          </Location>
          <Router>
            <Home path="/" games={this.state.games} />
            <Create path="/create" />
            <Play path="/play/:gameid" />
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
