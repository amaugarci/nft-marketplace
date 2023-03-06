import {
    Box,
    Container,
    Typography
} from "@mui/material";

const Header = () => {
    return (
        <Box
        sx={{
            bgcolor: 'background.paper',
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
                <Typography variant="h6" color="text.secondary" paragraph>
                    Here you can explore the tokens.
                </Typography>
            </Container>
        </Box>
    )
}

export default Header;
