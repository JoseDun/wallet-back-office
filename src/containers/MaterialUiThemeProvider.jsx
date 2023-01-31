import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#224492',
		},
		secondary: {
			main: '#45AC35',
		},
	},
});

const MaterialUiThemeProvider = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialUiThemeProvider;
