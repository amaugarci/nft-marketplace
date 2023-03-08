import Container from '@mui/material/Container';

import Navbar from './navbar';
import Footer from './footer';
import Header from './header';

const Layout = ({props, children}) => {
    return (
        <>
        <img style={{
            position: 'fixed',
            right: '-400px',
            top: '100px',
            height: '130%',
            opacity: .5,
            mixBlendMode: 'lighten',
            zIndex: -1
        }} src="/logo.png" alt="Logo" />
        <Navbar/>
        <main style={{margin:'100px 0'}}>
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
