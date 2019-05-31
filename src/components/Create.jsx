import React from "react";
import {
  Card,
  Typography,
  TextField,
  Grid,
  Box,
  Avatar,
  Button,
  CssBaseline,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Container
} from "@material-ui/core";
import Form from "./Form";
import axios from "axios";
import { navigate } from "@reach/router";

class Create extends React.Component {
  state = { title: "", description: "", completion: "", levels: [] };

  render() {
    const { title, description, completion, levels } = this.state;
    return (
      <Card>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Grid>
            <Typography component="h1" variant="h5">
              flavour text
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Title:"
                  onChange={(e) => this.handleChange("title", e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Description:"
                  onChange={(e) =>
                    this.handleChange("description", e.target.value)
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Form handleLevel={this.handleLevel} />
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Game completion message:"
                  onChange={(e) =>
                    this.handleChange("completion", e.target.value)
                  }
                />
              </Grid>

              {title && description && completion && levels.length && (
                <Button onClick={this.handleSubmit}>Submit Game</Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </Card>
    );
  }
  handleChange = (str, value) => {
    this.setState({ [str]: value });
  };
  handleLevel = (level) => {
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
