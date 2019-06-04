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
import CreateLevel from "./CreateLevel";
import { submitGame } from "../Api/Api";
import { navigate } from "@reach/router";
import { withTranslation } from "react-i18next";

class Create extends Component {
  state = { title: "", description: "", completion: "", levels: [] };

  render() {
    const { t } = this.props;
    const { title, description, completion, levels } = this.state;
    return (
      <Grid container>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Typography component="h1" variant="h5">
            {t("Create Your Game")}
          </Typography>

          <Typography>{t("Create game header")}</Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                //variant="outlined"
                fullWidth
                label={t("Title")}
                onChange={e => this.handleChange("title", e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                // variant="outlined"
                fullWidth
                multiline
                label={t("Description")}
                onChange={e => this.handleChange("description", e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                //variant="outlined"
                fullWidth
                multiline
                label={t("Game completion message")}
                onChange={e => this.handleChange("completion", e.target.value)}
                onChange={e => this.handleChange("completion", e.target.value)}
              />
            </Grid>
          </Grid>
        </Container>

        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Grid container justify="center">
            <CreateLevel handleLevel={this.handleLevel} />

            {
              <Button
                disabled={
                  !title || !description || !completion || !levels.length
                }
                onClick={this.handleSubmit}
              >
                {t("Submit Game")}
              </Button>
            }
          </Grid>
        </Container>
      </Grid>
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
    const game = this.state;
    submitGame(game).then(game_id => {
      navigate(`/play/${game_id}`);
    });
  };
}

export default withTranslation()(Create);
