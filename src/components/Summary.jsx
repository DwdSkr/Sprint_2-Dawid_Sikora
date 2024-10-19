import Button from './button';

const Summary = ({ arr, score, btn }) => {
	const scoreMath = score >= 8;
	const classManagment = (value) => {
		if (value) {
			return 'correct';
		} else {
			return 'false';
		}
	};
	const result = classManagment(scoreMath);
	const announcement = (score) => {
		return (
			<h2 className={result}>
				{score ? 'Gratulacje! Quiz zaliczony!' : 'Niestety, quiz niezaliczony'}
			</h2>
		);
	};
	const arrMap = arr.map((element, index) => (
		<div key={index}>
			<p className='question'>
				Pytanie {index + 1}: {element.question}
			</p>
			<p>
				Twoja odpowiedź:{' '}
				<span className={classManagment(element.answearStatus)}>
					{element.userAnswear}
				</span>
			</p>
		</div>
	));

	return (
		<div>
			{announcement(scoreMath)}
			<h3>
				Twój wynik to <span className={result}>{score * 10}.00% </span>({score}{' '}
				z 10 poprawnych odpowiedzi)
			</h3>
			<div className='answear-holder'> {arrMap}</div>

			<div>
				<Button onClick={btn} className='repeat' text='Powtórz quiz'></Button>
			</div>
		</div>
	);
};
export default Summary;
