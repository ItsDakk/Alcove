import { createTheme } from '@mui/material/styles';

export const themeOptions = {
    palette: {
      type: 'dark',
      primary: {
        main: '#748CAB',
      },
      secondary: {
        main: '#F0EBD8',
      },
      background: {
        default: '#0D1321',
        paper: '#748CAB',
      },
    },
  };

const theme = createTheme(themeOptions);
export default theme;