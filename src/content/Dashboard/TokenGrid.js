import Grid from '@mui/material/Grid';
import { useCallback, useContext, useEffect, useState } from 'react';

import { TokenContext } from '../../context/TokenContext';
import TokenItem from '../../component/token/item';

const TokenGrid = (props) => {

	const {tokens} = useContext(TokenContext);

	return (
		<Grid container spacing={4}>
			{tokens.map((token) => (
			<Grid item key={token.collection.id} xs={12} sm={6} md={4}>
				<TokenItem token={token.collection} />
			</Grid>
			))}
		</Grid>
	)
}

export default TokenGrid;
