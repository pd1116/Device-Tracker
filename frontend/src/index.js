// src/index.js
import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from './routes';
import { getDesignTokens } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';

const App = () => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes toggleMode={() => setMode(prev => prev === 'light' ? 'dark' : 'light')} mode={mode} />
      </ThemeProvider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
