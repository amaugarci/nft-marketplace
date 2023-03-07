import {useState, createContext, useCallback, useEffect} from "react";
import tokenData from "../data/tokens";
import {
    Box,
    Button,
    Grid,
    Skeleton,
    Typography
} from '@mui/material'

export const TokenContext = createContext(null);

const paginateData = (skip, limit) => {
    return tokenData.data.trendingCollectionsByCategoryTagBatched.slice(skip, skip + limit);
}

const min = (a, b) => {
    return a < b ? a : b;
}

const getCountArray = (cnt) => {
    let temp = [];
    for (let i = 0; i < cnt; i++) temp.push (i);
    return temp;
}

export const TokenProvider = ({children}) => {
    const [tokens, setTokens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [skip, setSkip] = useState(0);
    const limit = 12,
        totalCount = tokenData.data.trendingCollectionsByCategoryTagBatched.length;

    const loadTokens = useCallback(() => {
        setLoading(true);
        console.log('loading tokens '+skip + ":" + limit)
        const data = paginateData(skip, limit);
        setTimeout(()=>{
            setTokens(tokens.concat(data));
            setLoading(false);
        }, 1500)
    }, [skip])

    const [skeletons, setSkeletons] = useState([])
    useEffect(()=>{
        setSkeletons(getCountArray(min(limit, totalCount-skip-limit)))
    }, [loading])

    useEffect(()=>{
        console.log ('skip changed');
        loadTokens();
    }, [skip, loadTokens])

    return (
        <TokenContext.Provider value={{tokens, loading, loadTokens}}>
            <Grid container spacing={4}>
                {children}
                {loading && 
                    skeletons.map((item, idx) => (
                        <Grid key={"skeleton_"+idx} item  xs={12} sm={6} md={4}>
                            <Skeleton variant="rounded" sx={{width:'full', height:300}} />
                        </Grid>
                    ))
                }
            </Grid>
            <Typography variant="body1" sx={{
                textAlign: 'center',
                mt: 5
            }}>
                { min(skip + limit, totalCount) } / { totalCount }
            </Typography>
            <Box sx={{
                w: 'full',
                justifyContent: 'center',
                display: 'flex',
                mt: 3
            }}>
                <Button disabled={loading} variant="outlined" onClick={() => setSkip(min(skip + limit, totalCount))}>Load More</Button>
            </Box>
        </TokenContext.Provider>
    )
}