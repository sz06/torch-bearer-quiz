import React, {useState, useEffect} from 'react';
import SlideCard from '../components/SlideCard';
import LastSlide from "../components/LastSlide";
import {SlideService} from "../lib/index";

const responses = [];

export default () => {
	const [currentQuiz, setCurrentQuiz] = useState([]);
	const [index, setIndex] = useState(0);
	const [endReached, setEndReached] = useState(false);

	const onResponse = async (id, response) => {
		setIndex(index+1);
		responses.push({[id]: response});
		console.log(responses);
		console.log(index);
		if (currentQuiz.length-1 === index) {
			setEndReached(true);
		}
	};

	useEffect(() => {
		async function fetchData() {
			const quizSlides = await SlideService.getQuiz();
			setCurrentQuiz(quizSlides);
			// console.log(quiz);
		}
		fetchData();
	}, []);

	return (
		<React.Fragment>
			{endReached ?
				<LastSlide/> :
				currentQuiz.length ?
				<SlideCard slideId={currentQuiz[index]} onResponse={onResponse}/> :
					<div>Loading...</div>
			}
		</React.Fragment>
	);
}
