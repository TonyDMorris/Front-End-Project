import { createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
  palette: {
    //   primary: grey,
    secondary: grey
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
  // overrides: {
  //   Mui: {
  //     underline: "none"
  //   }
  // }
});
