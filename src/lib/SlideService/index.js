import axios from "axios";

export default class SlideService {
	static async getQuiz() {
		const response = await axios({
			data: {},
			method: 'get',
			url: `${process.env.REACT_APP_SERVER_URL}/quizzes/5dec14199e89250820f77a40`,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.data.slides;
	};
	static async getSlideViaId(slideId) {
		const response = await axios({
			data: {},
			method: 'get',
			url: `${process.env.REACT_APP_SERVER_URL}/slide/${slideId}`,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.data;
	};
}
