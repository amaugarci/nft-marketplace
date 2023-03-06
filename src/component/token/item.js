import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const TokenItem = ({token}) => {
	return (
		<Card
				sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
				>
				<CardMedia
					component="img"
					sx={{
					// 16:9
					// pt: '56.25%',
					}}
					// image="https://source.unsplash.com/random"
					image={token.banner}
					alt={token.name}
				/>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography gutterBottom variant="h5" component="h2">
					{token.name}
					</Typography>
					{/* <Typography>
					This is a media card. You can use this section to describe the
					content.
					</Typography> */}
				</CardContent>
				<CardActions>
					<Button size="small">{token.windowCollectionStats.volume.unit}</Button>
					<Button size="small">Edit</Button>
				</CardActions>
				</Card>
	)
}

export default TokenItem;
