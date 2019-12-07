import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
	card: {
		maxWidth: 345,
	},
});

export default function ImgMediaCard(props) {
	const classes = useStyles();
	const { imgUrl } = props;
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="slide content"
					height="300"
					image={imgUrl}
					title="Slide content"
				/>
			</CardActionArea>
		</Card>
	);
}
