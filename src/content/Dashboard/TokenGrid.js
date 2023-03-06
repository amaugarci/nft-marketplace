import Grid from '@mui/material/Grid';
import { useContext } from 'react';

import { TokenContext } from '../../context/TokenContext';
import TokenItem from '../../component/token/item';

const TokenGrid = (props) => {

	const {tokens} = useContext(TokenContext);

	return (
		<Grid container spacing={4}>
			{tokens.data.trendingCollectionsByCategory.edges.map((token) => (
			<Grid item key={token.node.id} xs={12} sm={6} md={4}>
				<TokenItem token={token.node} />
			</Grid>
			))}
		</Grid>
	)
}

export default TokenGrid;
