import React, {useState, useEffect} from 'react';
import SwipeableCard from "../components/SwipeableCard";
import {SlideService} from "../lib/index";

export default () => {
	const [quiz, setQuiz] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const quizzes = await SlideService.getQuiz();
			console.log(quizzes);
			setQuiz(quizzes);
		}
		fetchData();
		console.log(quiz);
	}, []);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slideContent, setSlideContent] = useState(quiz[0]);

	const onSlideChange = async (index, lastIndex) => {
		console.log('onSlideChange called', index, lastIndex);
		if (index === 1) {
			// Student got back to Question slide
			await setCurrentSlide(currentSlide+1);
			setSlideContent(quiz[currentSlide])
		} else {
			// yes or no? - record answer
			console.log('student answer to ' + currentSlide + ' was: ' + index);
		}
	};

	return (
		<div className="App">
			<SwipeableCard quizzes index={1} slideContent={slideContent} onSlideChange={onSlideChange} />
		</div>
	);
}
