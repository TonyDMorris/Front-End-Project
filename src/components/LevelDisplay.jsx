import React from "react";

class LevelDisplay extends React.Component {
  state = {
    input: ""
  };
  render() {
    return (
      <div>
        <p>{this.props.curLevel}</p>
        <p>{this.props.attempts}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button type="sumbit">Submit</button>
        </form>
        {this.props.changeLevelButton && (
          <button onClick={this.props.changeLevel}>Change Level</button>
        )}
      </div>
    );
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.checkAnswer(this.state.input);
    this.setState({ input: "" });
  };
}

export default LevelDisplay;
