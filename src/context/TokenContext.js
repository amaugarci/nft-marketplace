import {useState, createContext, useCallback, useEffect} from "react";
import tokenData from "../data/tokens";
import {
    Box,
    Button
} from '@mui/material'

export const TokenContext = createContext(null);

const paginateData = (skip, limit) => {
    return tokenData.data.trendingCollectionsByCategoryTagBatched.slice(skip, skip + limit);
}

const min = (a, b) => {
    return a < b ? a : b;
}

export const TokenProvider = ({children}) => {
    const [tokens, setTokens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [skip, setSkip] = useState(0);
    const limit = 12,
        totalCount = tokenData.data.trendingCollectionsByCategoryTagBatched.length;

    const loadTokens = useCallback(() => {
        console.log('loading tokens '+skip + ":" + limit)
        const data = paginateData(skip, limit);
        setLoading(true);
        setTokens(tokens.concat(data));
        setLoading(false);
    }, [skip])

    useEffect(()=>{
        console.log ('skip changed');
        loadTokens();
    }, [skip, loadTokens])

    return (
        <TokenContext.Provider value={{tokens, loading, loadTokens}}>
            {children}
            <Box sx={{
                w: 'full',
                justifyContent: 'center',
                display: 'flex',
                mt: 5
            }}>
                <Button variant="outlined" onClick={() => setSkip(min(skip + limit, totalCount))}>Load More { min(skip + limit, totalCount) } / { totalCount }</Button>
            </Box>
        </TokenContext.Provider>
    )
}