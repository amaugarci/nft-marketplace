import {useState, createContext, useCallback} from "react";
import tokenData from "../data/tokens";

export const TokenContext = createContext(null);

export const TokenProvider = ({children}) => {
	const [tokens, setTokens] = useState([]);
	const [loading, setLoading] = useState(false);
	const [skip, setSkip] = useState();
	const limit=12;

	const loadTokens = useCallback (() => {
			console.log('loading tokens')
			setLoading(true);
			setTokens(tokens.concat(tokenData.data.trendingCollectionsByCategoryTagBatched.slice(skip,limit)));
			setLoading(false);
		},[skip, limit]
	)

	return (
		<TokenContext.Provider value={{tokens, loading, loadTokens}}>
			{children}
		</TokenContext.Provider>
	)
}