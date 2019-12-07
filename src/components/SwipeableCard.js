import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Card from './SlideCard';

const styles = {
	slide: {
		padding: 15,
		minHeight: 100,
		color: '#fff',
	},
	no: {
		backgroundColor: '#FEA900',
	},
	yes: {
		backgroundColor: '#B3DC4A',
	},
	content: {
		backgroundColor: '#6AC0FF',
	},
};

export default (props) => {

	const { index, onSlideChange, slideContent } = props;
	return (
		<SwipeableViews enableMouseEvents onChangeIndex={onSlideChange} index={index}>
			<div style={Object.assign({}, styles.slide, styles.no)}>Nay</div>
			<Card imgUrl={slideContent}/>
			<div style={Object.assign({}, styles.slide, styles.yes)}>Yay!</div>
		</SwipeableViews>
	);
}
