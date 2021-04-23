import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const headers = {
  fontWeight: 800,
  fontStyle: 'italic'
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#21524e',
    },
    secondary: {
      main: '#39817b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#d2f3f1',
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
  },
  overrides: {
    MuiTypography: {
      h1: headers,
      h2: headers,
      h3: headers,
      h4: headers,
      h5: headers,
      h6: headers,
    }
  }
});

export default theme;

export type AppTheme = typeof theme;