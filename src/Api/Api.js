import axios from "axios";
import vision from "react-cloud-vision-api";

const URL = "https://mongo-flask-api.herokuapp.com/";

export const getGames = () => {
  return axios
    .get(`${URL}gameslist`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      const error = {
        message: "You need to be online"
      };
      console.log(err);
      return error;
    });
};

export const submitGame = game => {
  return axios
    .post(`${URL}games`, game)
    .then(({ data: { game_id } }) => {
      return game_id;
    })
    .catch(err => {
      const error = {
        message: "You need to be online"
      };
      console.log(err);
      return error;
    });
};

export const classifyImage = base64Img => {
  vision.init({ auth: "AIzaSyB6nHUETOWX7cGDQdqv9dokDb8oXVZN-f0" });
  const req = new vision.Request({
    image: new vision.Image({
      base64: base64Img
    }),
    features: [new vision.Feature("LABEL_DETECTION", 10)]
  });

  return vision
    .annotate(req)
    .then(
      ({ responses }) => {
        const labels = responses[0].labelAnnotations.reduce((acc, curr) => {
          acc.push(curr.description);
          return acc;
        }, []);
        return labels;
      },
      googleError => {
        console.log("Error: ", googleError);
      }
    )
    .catch(err => {
      const error = {
        message: "You need to be online"
      };
      console.log(err);
      return error;
    });
};

export const getGame = game_id => {
  return axios
    .get(`${URL}/games?id=${game_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      console.dir(err);
    });
};
