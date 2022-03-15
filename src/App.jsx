import * as React from 'react';
import SignIn from './pages/SignIn';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Manager from './pages/Manager';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InfoProvider } from './InfoContext';
import Action from './pages/Action';

let theme = createTheme({
  typography: {
    // fontFamily: 'Shizuru, cursive'
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
            <Route path='/manager' element={<Manager />} />
            <Route path='/action' element={<Action />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </InfoProvider>
  );
}

export default App;
