import {useState, useEffect, createContext} from "react";
import tokenData from "../data/tokens";

export const TokenContext = createContext(null);

export const TokenProvider = ({children}) => {
	const [tokens, setTokens] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(()=>{
		setTokens(tokenData);
		setLoading(false);
	},[]);

	return (
		<TokenContext.Provider value={{tokens, setTokens, loading, setLoading}}>
			{loading?<></>:children}
		</TokenContext.Provider>
	)
}