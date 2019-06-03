import React from "react";
import { Link as ReachLink } from "@reach/router";

import { Card, Link, Typography } from "@material-ui/core";

import { useTranslation } from "react-i18next";


const GameLink = React.forwardRef((props, ref) => (
  <ReachLink innerRef={ref} {...props} />
));


const GameCard = props => {
  const { t } = useTranslation();

  const { game } = props;
  console.log(game);
  return (
    <div>
      <Card>
        <Link component={GameLink} to={`/play/${game.id}`}>

          <Typography>
            <h1>{game.title}</h1>
            <p>{game.description}</p>
            <p> {t("levels")} {game.levels.length}</p>
          </Typography>

        </Link>
      </Card>
    </div>
  );
};

export default GameCard;
