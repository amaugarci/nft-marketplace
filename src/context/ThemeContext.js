import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';

import Themes from '../theme';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {

	const [themeName, setThemeName] = useState('DefaultTheme');

	useEffect(() => {
		setThemeName('DefaultTheme');
	}, [])

	return (
		<ThemeContext.Provider value={{themeName, setThemeName}}>
			<ThemeProvider theme={Themes[themeName]}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
