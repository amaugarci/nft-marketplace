import Container from '@mui/material/Container';

import Navbar from './navbar';
import Footer from './footer';
import Header from './header';

const Layout = ({props, children}) => {
    return (
        <>
        <Navbar/>
        <main>
            <Header/>
            <Container sx={{ py: 1 }} maxWidth="lg">
                {children}
            </Container>
        </main>
        <Footer/>
        </>
    )
}

export default Layout;
