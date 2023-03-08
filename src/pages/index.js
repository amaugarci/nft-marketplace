import TokenGrid from '../content/Dashboard/TokenGrid';
import { TokenProvider } from '../context/TokenContext';

const Dashboard = () => {

	return (
		<TokenProvider>
			<TokenGrid></TokenGrid>
		</TokenProvider>
	)
}

export default Dashboard;
