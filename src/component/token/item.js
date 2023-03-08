import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Modal,
	Grid
} from "@mui/material"

import { TokenContext } from '../../context/TokenContext';
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import { useState, useRef, useContext } from "react";

import EtherIcon from "../icon/ethereum";

const TokenItem = ({token}) => {
	const [up, setUp] = useState(false);
	const {handleOpenModal} = useContext(TokenContext);
	// Ripple Effect
	const rippleRef = useRef(null);
	const buttonRef = useRef(null);

	const triggerRipple = () => {
		const container = buttonRef.current;
		const rect = container.getBoundingClientRect();
		console.log(rect);

		rippleRef.current.start(
			{
				clientX: rect.left + rect.width / 2,
				clientY: rect.top + rect.height / 2,
			},
			// when center is true, the ripple doesn't travel to the border of the container
			{ center: false },
		);

		setTimeout(() => rippleRef.current.stop({}), 320);
	};

	return (
		<>
			<Card
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					overflow:'hidden',
					position: 'relative',
					backgroundImage: 'radial-gradient(100% 100% at 50% 160%,rgba(1,249,255,.192) 0,transparent 100%)',
					transition: 'all .5s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
					boxShadow: (up ? '0 0 30px rgba(246, 90, 226, .3)' : '0 0 0 rgba(246, 90, 226, .3)')
				}}
				ref={buttonRef}
				onMouseOver={() => setUp(true)}
				onMouseOut={() => setUp(false)}
				onClick={() => handleOpenModal(token)}
			>
				<TouchRipple ref={rippleRef} center sx={{
					width: 'full',
					height: 'full',
					zIndex: 10
				}} />
				<CardMedia
					component="img"
					sx={{
						height: 200,
						scale: up ? '1.1' : 'initial',
						transformOrigin: 'bottom',
						transition: 'all .5s linear'
					}}
					image={token.banner}
					onClick={triggerRipple}
					loading="lazy"
					src='/logo.png'
					alt={token.name}
				>
				</CardMedia>

				<CardContent sx={{flexGrow:1, px:'16px', pt:'8px', pb:0}}>
					<Typography gutterBottom variant="h5" component="h2">
						{token.name}
					</Typography>
				</CardContent>

				<CardActions sx={{display:"flex", justifyContent:'space-between'}}>
					<Button size="small" sx={{display:"flex", alignItems:'center'}}>
						<EtherIcon />
						<Typography>
							{Number(token.windowCollectionStats.volume.unit).toFixed(4)}
						</Typography>
					</Button>
					<Button size="small">Add to Cart</Button>
				</CardActions>
			</Card>
		</>
	)
}

export default TokenItem;
