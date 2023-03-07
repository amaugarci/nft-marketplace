import { createTheme } from "@mui/material";

const DefaultTheme = createTheme({
	mode:'light',
	colors: {
		primary: {
			main: '#fff'
		},
		secondary: {
			main: '#ddd'
		},
	},
	palette: {
		common: {
			black: '#fff',
			white: '#000'
		},
		palette: {
			primary: {
				main: '#fff'
			},
			secondary: {
				main: '#ddd'
			},
			mode: 'dark'
		}
	}
});

const theme = {DefaultTheme};

export default theme;
