import * as React from 'react';
import SignIn from './pages/SignIn';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Manager from './pages/Manager';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
let theme = createTheme({
  typography: {
    // fontFamily: 'Shizuru, cursive'
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter >
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route path='/manager' element={<Manager />} />
        </Routes>
      </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
