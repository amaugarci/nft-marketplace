import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import AppRouter from './router';
import Layout from './content/Layout';
import { ThemeContextProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Layout>
        <AppRouter></AppRouter>
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
