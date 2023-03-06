import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './content/Layout';
import AppRouter from './router';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
		<CssBaseline />
		<Layout>
			<AppRouter></AppRouter>
		</Layout>
    </ThemeProvider>
  );
}

export default App;
