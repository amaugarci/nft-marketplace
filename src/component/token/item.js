import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography
} from "@mui/material"
import { useState } from "react";

import EtherIcon from "../icon/ethereum";

const TokenItem = ({token}) => {
	const [up, setUp] = useState(false);
	return (
		<Card
			sx={{height:'100%', display:'flex', flexDirection:'column'}}
			onMouseOver={() => setUp(true)}
			onMouseOut={() => setUp(false)}
		>
			<CardMedia
				component="img"
				sx={{
					height: 200,
					scale: up ? '1.1' : 'initial',
					transformOrigin: 'bottom',
					transition: 'all .5s linear'
				}}
				image={token.banner}
				loading="lazy"
				src='/logo.png'
				alt={token.name}
			>
			</CardMedia>

			<CardContent sx={{ flexGrow: 1 }}>
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
				<Button size="small">Edit</Button>
			</CardActions>
		</Card>
	)
}

export default TokenItem;
