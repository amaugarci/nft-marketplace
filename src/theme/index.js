import { createTheme } from '@mui/material/styles';

const DefaultTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "black"
		}
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root:{
					borderRadius: 20,
					cursor: "pointer"
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
					borderRadius: 10,
					px: 10,
					py: 3,
					color: "rgb(88 208 234)",
				},
				outlined:{
					borderWidth: 2,
					borderColor: "rgb(88 208 234)",
					boxShadow: "0 0 3px white, inset 0 0 3px white"
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: "rgb(25 26 32 .5)",
					backgroundImage: "none"
				},
				elevation4: {
					backgroundColor: "rgb(25 26 32 .5)"
				}
			}
		}
	},
	typography: {
		fontFamily: ["Orbitron"].join(','),
		h3: {
			fontWeight: 900
		},
		body1: {
			fontFamily: "Nunito",
			lineHeight: 2
		}
	}
});

const theme = {DefaultTheme};

export default theme;
