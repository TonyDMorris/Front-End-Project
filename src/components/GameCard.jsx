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
    <div key={game.game_id}>
      <Card>
        <Link component={GameLink} to={`/play/${game.id}`}>
          <Typography variant="h3">{game.title}</Typography>
          <Typography variant="body1"> {game.description}</Typography>
          <Typography>
            {" "}
            {t("levels")} {game.levels.length}
          </Typography>
        </Link>
      </Card>
    </div>
  );
};

export default GameCard;
