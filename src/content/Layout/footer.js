import {
    Box,
    Link,
    Typography
} from '@mui/material'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{
            fontFamily: 'Nunito'
        }}>
            {'Copyright © 2023 '}
            <Link color="inherit" href="https://github.com/Ares90125">
                Ares90125's github
            </Link>{' '}
            {'.'}
        </Typography>
    )
}

const Footer = () => {
    return (
        <Box sx={{bgcolor:'background.paper', p:6}} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                NFT Marketplace
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src="https://www.svgrepo.com/show/353655/discord-icon.svg" alt="discord" height="40px" />
                <Typography variant="body1">
                    Ares#3451
                </Typography>
            </Box>
            <Copyright />
        </Box>
    )
}

export default Footer;
