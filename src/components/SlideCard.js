import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	card: {
		maxWidth: 345,
	},
});

export default function ImgMediaCard(props) {
	// const [imgUrl, setImgUrl] = useState(null);
	const { slideId, onResponse } = props;

	// useEffect(() => {
	// 	async function fetchData() {
	// 		// const slide = await SlideService.getSlideViaId(slideId);
	// 		// console.log('SlideCard.useEffect: ' + slide.name);
	// 		setImgUrl(slide.url);
	// 	}
	// 	fetchData();
	// }, [slideId]);

	const classes = useStyles();
	return (
		<React.Fragment>
			{slideId ?
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="slide content"
							height="400"
							image={slideId}
							title="Slide content"
						/>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="secondary" onClick={() => onResponse(slideId, false)}>
							NO
						</Button>
						<Button size="small" color="primary" onClick={() => onResponse(slideId, true)}>
							YES
						</Button>
					</CardActions>
				</Card> :
				<p>Unable to fetch image</p>
			}
		</React.Fragment>

	);
}
