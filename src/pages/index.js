import { TokenProvider } from '../context/TokenContext';
import TokenGrid from '../content/Dashboard/TokenGrid';

import { useTheme } from '@mui/material';
import { useEffect } from 'react';

const Dashboard = ({props}) => {

	const theme = useTheme();

	useEffect(() => {
		console.log(theme);
	}, [theme])

	return (
		<TokenProvider>
			<TokenGrid></TokenGrid>
		</TokenProvider>
	)
}

export default Dashboard;
