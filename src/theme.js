import { createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
// import PirateFont from "./PirateFont.tff";

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  typography: {
    fontFamily: "'Montserrat', Italianno",
    fontSize: 16,
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    textfieldColor: {
      color: "red",
      "&:focus": {
        color: "#DE0404"
      }
    }
  }
});
