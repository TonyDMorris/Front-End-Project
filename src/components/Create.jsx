import React from "react";
import { Card, Typography, TextField, Button } from "@material-ui/core";
import Form from "./Form";
import axios from "axios";
import { navigate } from "@reach/router";

class Create extends React.Component {
  state = { title: "", description: "", completion: "", levels: [] };

  render() {
    const { title, description, completion, levels } = this.state;
    return (
      <Card>
        <Typography>flavour text</Typography>
        <TextField
          label="Title:"
          onChange={e => this.handleChange("title", e.target.value)}
        />
        <TextField
          label="Description:"
          onChange={e => this.handleChange("description", e.target.value)}
        />
        <Form handleLevel={this.handleLevel} />
        <TextField
          label="Game completion message:"
          onChange={e => this.handleChange("completion", e.target.value)}
        />
        {title && description && completion && levels.length && (
          <Button onClick={this.handleSubmit}>Submit Game</Button>
        )}
      </Card>
    );
  }
  handleChange = (str, value) => {
    this.setState({ [str]: value });
  };
  handleLevel = level => {
    const { levels } = this.state;
    this.setState({ levels: [...levels, level] });
  };
  handleSubmit = () => {
    return axios
      .post("https://mongo-flask-api.herokuapp.com/games", this.state)
      .then(({ data: { game_id } }) => {
        navigate(`/play/${game_id}`);
      });
  };
}

export default Create;
