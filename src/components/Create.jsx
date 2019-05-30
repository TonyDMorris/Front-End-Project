import React from "react";
import { Card, Typography, TextField } from "@material-ui/core";

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
        <TextField
          label="Completion text:"
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
  //handleLevel = ()=>{
  //handleSubmit=()=>{
  //navigate to created game
}

export default Create;
