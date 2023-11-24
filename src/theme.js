import {
    createTheme,
    alpha,
    getContrastRatio,
  } from '@mui/material/styles';

const greenBase = '#274534';
const greenMain = alpha(greenBase, 0.7);

const theme = createTheme({
  palette: {
    background: {
      paper: '#f9f7f3',
    },
    primary: {
      main: greenMain,
      light: alpha(greenBase, 0.5),
      dark: alpha(greenBase, 0.9),
      contrastText: getContrastRatio(greenMain, '#fff') > 4.5 ? '#fff' : '#111',
    },

  },
});

export default theme