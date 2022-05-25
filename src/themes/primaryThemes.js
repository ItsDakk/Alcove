import { createTheme } from "@mui/material/styles"

export const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#748CAB',
      },
      secondary: {
        main: '#0D1321',
      },
      background: {
        default: '#F0EBD8',
        paper: '#748CAB',
      },
    },
  };

const theme = createTheme(themeOptions);
export default theme;