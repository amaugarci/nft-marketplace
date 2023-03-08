import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <AppBar position="fixed" sx={{
            py: '10px'
        }}>
            <Toolbar>
                <img src="https://www.alturanft.com/logo-svg.svg" alt="Altura_logo" />
                <Typography variant="h5" color="inherit" noWrap>
                    <span style={{
                        color: "rgb(246 90 226)",
                        fontWeight: "900"
                    }}>Altura</span> NFT Marketplace
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
