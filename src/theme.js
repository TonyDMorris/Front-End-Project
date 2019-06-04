import { createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  typography: {
    fontFamily: "IM Fell English SC",
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
