import { TokenProvider } from '../context/TokenContext';
import TokenGrid from '../content/Dashboard/TokenGrid';

const Dashboard = ({props}) => {
    return (
		<TokenProvider>
			<TokenGrid></TokenGrid>
		</TokenProvider>
    )
}

export default Dashboard;
