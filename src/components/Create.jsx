import React, { Component } from "react";
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
import { withTranslation } from "react-i18next";

class Create extends Component {
  state = { title: "", description: "", completion: "", levels: [] };

  render() {
    const { t } = this.props;
    const { title, description, completion, levels } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Grid container>
          <Typography component="h1" variant="h5">
            {t("Create Your Game")}
          </Typography>

          <Typography>{t("Create game header")}</Typography>

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label={t("Title")}
                onChange={e => this.handleChange("title", e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label={t("Description")}
                onChange={e => this.handleChange("description", e.target.value)}
              />
            </Grid>

            <Form handleLevel={this.handleLevel} />

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label={t("Game completion message")}
                onChange={e => this.handleChange("completion", e.target.value)}
              />
            </Grid>

            {title && description && completion && levels.length && (
              <Button onClick={this.handleSubmit}>{t("Submit Game")}</Button>
            )}
          </Grid>
        </Grid>
      </Container>
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

export default withTranslation()(Create);
