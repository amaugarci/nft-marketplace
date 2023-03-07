import { createTheme } from "@mui/material/styles";

const DefaultTheme = createTheme({
	palette: {
		mode: 'dark'
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root:{
					borderRadius: 20,
					cursor: 'pointer'
				}
			}
		},
		MuiSkeleton: {
			styleOverrides: {
				root:{
					borderRadius: 20
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root:{
					borderRadius: 20,
					padding: 10
				}
			}
		}
	}
});

const theme = {DefaultTheme};

export default theme;
