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
			// const quizSlides = await SlideService.getQuiz();
			const quizSlides = ['../mock/images/1.png',
				'../mock/images/2.png',
				'../mock/images/3.png',
				'../mock/images/4.png',
				'../mock/images/5.png',
				'../mock/images/6.png',
				'../mock/images/7.png'
			];
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
