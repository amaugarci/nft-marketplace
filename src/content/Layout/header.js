import {
    Box,
    Container,
    Typography
} from "@mui/material";

const Header = () => {
    return (
        <Box
        sx={{
            background: 'none',
            pt: 3,
            pb: 2,
        }}
        >
            <Container maxWidth="lg">
                <Typography
                variant="h3"
                color="text.primary"
                gutterBottom
                >
                    NFT Marketplace
                </Typography>
                <Typography variant="h6" color="rgb(88 208 234)" paragraph>
                    Here you can explore the tokens.
                </Typography>
            </Container>
        </Box>
    )
}

export default Header;
