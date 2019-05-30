import React from "react";
import { Card, Typography, TextField } from "@material-ui/core";
import Form from "./Form";

class Create extends React.Component {
  state = { title: "", description: "", completion: "", levels: [] };

  render() {
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
      </Card>
    );
    // title

    // description

    //Form

    //win message
    //submit button
  }
  handleChange = (str, value) => {
    this.setState({ [str]: value });
  };
  handleLevel = level => {
    const { levels } = this.state;
    this.setState({ levels: [...levels, level] });
  };
}

export default Create;
