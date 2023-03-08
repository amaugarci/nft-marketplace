import {
    Box,
    Button,
    Grid,
    Typography
} from '@mui/material'
import EtherIcon from '../icon/ethereum';

const Modal = ({token}) => {
    return (
        <Grid
            container
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                border: 'none',
                maxWidth: 'lg',
                width: '80%',
                borderRadius: "20px",
                paddingBottom: "20px",
                overflow: 'clip'
            }}
            spacing={2}
        >
            <Box sx={{
                position: 'absolute',
                right: '-246px',
                top: '27px'
            }}>
                <img src="/logo.png" height="798px" style={{mixBlendMode:'lighten'}} className="bounce" alt="Logo" />
            </Box>
            <Grid item sm={12} md={6}>
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: 400
                }}>
                    <img style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: "10px",
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
                            borderRadius: '0 0 10px 10px',
                            backdropFilter: 'blur(50px)',
                            padding: 3
                        }}
                    >
                        <Button size="small" sx={{display:"flex", alignItems:'center', borderRadius:'10px'}}>
                            <EtherIcon />
                            <Typography>
                                {Number(token.windowCollectionStats ? token.windowCollectionStats.volume.unit : 0).toFixed(4)}
                            </Typography>
                        </Button>
                        <Button size="small" sx={{borderRadius:'10px'}}>Edit</Button>
                    </Box>
                </Box>
                <Box sx={{textAlign:'center', mt:2}}>
                    <Typography variant="h5" component="h2">
                        {token.name}
                    </Typography>
                </Box>

            </Grid>
            <Grid item sm={12} md={6}>
                <Box sx={{
                    height: '100%',
                    padding: 2,
                    paddingRight: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="body1" component="p">
                        The PUMA Nitro Collection is the digital twin to the physical NFRNO and Fastroid shoes that can be claimed with PUMA Materializer NFT in 2023.
                        <br/>
                        Both designs were developed with the metaverse in mind. Designed first in 3D and tested in augmented reality before physical samples were ever created. The physical products are a first-of-their-kind experiment with new materials, technology, and design.
                        <br/>
                        Holders of the PUMA Nitro Collection will receive premier access to future PUMA projects in the web3 and metaverse space.
                    </Typography>
                    <Button variant="outlined" href={token.banner} target="_blank" sx={{
                        textShadow: '0px 0px 5px white'
                    }}>
                        Purchase
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Modal;