import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { abcTheme } from './';


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ abcTheme }>
      <CssBaseline />
      
      { children }
    </ThemeProvider>
  )
}