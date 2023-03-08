import {
    AppBar,
    Avatar,
    Box,
    Link,
    Toolbar,
    Typography
} from '@mui/material'

const Navbar = () => {
    return (
        <AppBar position="fixed" sx={{
            py: '10px',
            backgroundColor: 'rgba(0,0,0,.4)',
            backdropFilter: 'blur(10px)'
        }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src="https://www.alturanft.com/logo-svg.svg" alt="Altura_logo" />
                    <Typography variant="h5" color="inherit" noWrap>
                        <span style={{
                            color: "rgb(246 90 226)",
                            fontWeight: "900"
                        }}>
                            Altura
                        </span>&nbsp;
                        NFT Marketplace
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <Avatar alt="James. F" src="https://avatars.githubusercontent.com/u/122885050?v=4" sx={{width:'40px', height:'40px'}} />
                    <Link href="mailto:dragon99steel@gmail.com" sx={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>
                        <Typography variant="body1">
                            <span style={{color:'gray'}}>Mail to : </span>James. F.
                        </Typography>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
