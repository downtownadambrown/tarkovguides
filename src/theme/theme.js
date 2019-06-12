import { createMuiTheme } from '@material-ui/core/styles';
import purple from "@material-ui/core/colors/purple";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import green from '@material-ui/core/colors/green';


let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#800000",
        },
        secondary: {
            main: "#4d0000",
        },
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
        type: 'dark',
    },
    status: {
        danger: 'orange'
    }
});

export default theme;
