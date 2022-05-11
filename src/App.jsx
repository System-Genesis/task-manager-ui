import * as React from 'react';
import SignIn from './pages/SignIn';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Button from './pages/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InfoProvider } from './InfoContext';
import Action from './pages/Action';
// require('dotenv').config()
let theme = createTheme({
  typography: {
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <InfoProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/button' element={<Button />} />
            <Route path='/action' element={<Action />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </InfoProvider>
  );
}

export default App;
