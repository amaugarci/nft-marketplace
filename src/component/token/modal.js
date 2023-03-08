/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Box,
    Button,
    Grid,
    IconButton,
    Typography,
} from '@mui/material'
import { useContext, forwardRef } from 'react';

import EtherIcon from '../icon/ethereum';
import { TokenContext } from '../../context/TokenContext';

const Modal = forwardRef ((props, ref)=> {
    const {token} = props;
    const {handleCloseModal} = useContext(TokenContext);
    return (
        <Grid
            ref={ref}
            container
            sx={{
                bgcolor: 'background.paper',
                backgroundImage: 'radial-gradient(50% 100% at 100% 100%,rgba(1,249,255,.192) 0,transparent 100%)',
                width: '80%',
                maxWidth: 'lg',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderWidth: 0,
                borderRadius: "0 60px",
                paddingBottom: "20px",
                overflow: 'hidden'
            }}
            spacing={2}
        >
            <Box sx={{
                position: 'absolute',
                right: '-246px',
                top: '27px'
            }}>
                <img src="/logo.png" height="798px" style={{mixBlendMode:'lighten', backdropFilter:'blur(0)'}} alt="logo" className="bounce" />
            </Box>
            <Grid item sm={12} md={6}>
                <Box sx={{
                    position: 'relative',
                    height: '100%',
                    borderRadius: '0 0 0 40px',
                    overflow: 'hidden'
                }}>
                    <img style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        src={token.banner}
                        alt={token.name}
                    />
                    <Box sx={{
                            display: "flex",
                            justifyContent: 'space-between',
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            padding: 3,
                            borderRadius: '0 0 0 40px',
                            backdropFilter: 'blur(50px)'
                        }}
                    >
                        <Button size="small" sx={{display:"flex", alignItems:'center', borderRadius:'10px', textShadow:'0 0 5px black', color:'white'}}>
                            <EtherIcon />
                            <Typography>
                                {Number(token.windowCollectionStats ? token.windowCollectionStats.volume.unit : 0).toFixed(4)}
                            </Typography>
                        </Button>
                        <Button size="small" sx={{borderRadius:'10px', textShadow:'0 0 5px black', color:'white'}}>
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item sm={12} md={6}>
                <Box sx={{mt:2}}>
                    <Typography variant="h5" component="h2" sx={{
                        pl: '30px',
                        pr: '50px'
                    }}>
                        {token.name}
                    </Typography>
                </Box>

                <Box sx={{
                    height: '100%',
                    padding: '16px 32px 16px 16px'
                }}>
                    <IconButton style={{
                            position: 'absolute',
                            right: '30px',
                            top: '30px',
                            color: 'white',
                            lineHeight: '1rem',
                        }}
                        onClick={handleCloseModal}
                    >
                        &times;
                    </IconButton>
                    <Typography variant="body1" component="p" sx={{p:2}}>
                        The PUMA Nitro Collection is the digital twin to the physical NFRNO and Fastroid shoes that can be claimed with PUMA Materializer NFT in 2023.
                        <br/>
                        Both designs were developed with the metaverse in mind. Designed first in 3D and tested in augmented reality before physical samples were ever created. The physical products are a first-of-their-kind experiment with new materials, technology, and design.
                        <br/>
                        Holders of the PUMA Nitro Collection will receive premier access to future PUMA projects in the web3 and metaverse space.
                    </Typography>
                    <Button
                        variant="outlined"
                        href="https://opensea.io/assets/ethereum/0x9594addccb032366835df689ddd83a98a12e7a1c/4"
                        target="_blank"
                        sx={{
                            textShadow: '0px 0px 5px white'
                        }}>
                        Purchase
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
})

export default Modal;