import {
    Box,
    Typography
} from "@mui/material";
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/dragon1227">
          dragon1227's github
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                NFT Marketplace
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
                Thx to the Altura!
            </Typography>
            <Copyright />
        </Box>
    )
}

export default Footer;
