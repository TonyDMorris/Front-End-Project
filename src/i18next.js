import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "current-language": "English",
      "Create New Game": "Create Game",
      "English-lang": "English",
      "Spanish-lang": "Spanish",
      "Create Your Game": "Create Your Game",
      "Create game header":
        "Give your new game a name and add a short description.",
      "Submit Game": "Submit Game",
      Title: "Title:",
      Description: "Description:",
      "Game completion message": "Game completion message:",
      levels: "Levels:",
      "introduction paragraph":
        "Welcome to TheHunt, where you can challenge your friends to hunt pretty much whatever you want! Set some clues(as hard or as easy as you like), find some objects, beat your friends! Can you find everything without using any clues??Pick one of the games, or create your own!",
      "Create new level": "Create level:",
      "Main clue": "Main clue:",
      "Second clue": "Second clue:",
      "Third clue": "Third clue:",
      "Select win condition": "Select a win condition:",
      Text: "Text:",
      Image: "Image",
      GPS: "GPS",
      "Level completion message": "Level completion message:",
      "Add Level": "Add Level",
      create: "Create Game",
      Level: "Level",
      Task: "Task",
      "Clue 1": "1st Clue:",
      "Clue 2": "2nd Clue",
      Submit: "Submit",
      "Check GPS": "Check GPS",
      "take pic": "take pic",
      "Next Level": "Next Level",
      Home: "Home",
      "Your answer": "Your answer:",
      "Send GPS": "Send GPS",
      "Play here": "Play here:"
    }
  },
  es: {
    translation: {
      "current-language": "Español",
      "Create New Game": "Crear Juego",
      "English-lang": "Inglés",
      "Spanish-lang": "Español",
      "Create Your Game": "Crea Tu Juego",
      "Create game header":
        "Dale un nombre a tu juego y añade una breve descripción.",
      "Submit Game": "Enviar Juego",
      Title: "Nombre:",
      Description: "Descripción:",
      "Game completion message": "Mensaje final de juego:",
      levels: "Niveles:",
      "introduction paragraph":
        "Bienvenido a TheHunt, ¡dónde tú puedes retar a tus amigos a lo que sea! Pon algunas pistas (tan difíciles o fáciles como tú quieras), encuentra objetos, ¡machácales! ¿Eres capaz de encontrar todo sin necesitar ninguna pista? ¡Elige uno de los juegos, o crea el tuyo propio!",
      "Create new level": "Crear Nivel:",
      "Main clue": "Primera pista:",
      "Second clue": "Segunda pista:",
      "Third clue": "Tercera pista:",
      "Select win condition": "Elige como tiene que ser la respuesta:",
      Text: "Texto:",
      Image: "Imagen",
      GPS: "GPS",
      "Level completion message": "Mensaje al pasar de nivel:",
      "Add Level": "Añadir Nivel",
      create: "Crear Juego",
      Level: "Nivel",
      Task: "Misión",
      "Clue 1": "1ª pista:",
      "Clue 1": "2ª pista:",
      Submit: "Enviar",
      "Check GPS": "Comprobar GPS",
      "take pic": "hacer foto",
      "Next Level": "Siguiente Nivel",
      Home: "Página Principal",
      "Your answer": "Respuesta esperada:",
      "Send GPS": "Enviar GPS",
      "Play here": "Juega aquí:"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
