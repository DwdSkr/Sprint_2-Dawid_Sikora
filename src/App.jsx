import { useState } from 'react';
import Start from './components/Start';
import Button from './components/button';
import Question from './components/Question';
import { QUESTIONS } from '../quizQuestions';
import Summary from './components/Summary';
function App() {
	const [pageCounter, setPageCounter] = useState(0);
	const [questionCounter, setQuestionCounter] = useState(0);
	const [userAnswear, setUserAnswear] = useState([]);
	const [score, setScore] = useState(0);
	function nextPage() {
		setPageCounter(pageCounter + 1);
	}
	const nextQuestion = (question, answear, status) => {
		const getUserAnswear = {
			question: question,
			userAnswear: answear,
			answearStatus: status,
		};
		setUserAnswear([...userAnswear, getUserAnswear]);
		if (status) {
			setScore(score + 1);
		}
		setQuestionCounter(questionCounter + 1);
		if (questionCounter === 9) {
			setPageCounter(pageCounter + 1);
			setQuestionCounter(0);
		}
	};
	function reset() {
		setPageCounter(0);
		setQuestionCounter(0);
		setScore(0);
		setUserAnswear([]);
	}
	const question = QUESTIONS[questionCounter];
	const answears = question.answers;
	const answear = answears.map((element, index) => (
		<Button
			key={index}
			onClick={() =>
				nextQuestion(question.text, element.text, element.isCorrect)
			}
			className='question-button'
			text={element.text}
		></Button>
	));
	if (pageCounter === 0) {
		return (
			<Start>
				<Button onClick={nextPage} text='Rozpocznij Quiz'></Button>
			</Start>
		);
	} else if (pageCounter === 2) {
		return <Summary arr={userAnswear} score={score} btn={reset}></Summary>;
	} else if (pageCounter === 1) {
		return (
			<Question number={questionCounter} txt={question.text}>
				{answear}
			</Question>
		);
	}
}

export default App;
