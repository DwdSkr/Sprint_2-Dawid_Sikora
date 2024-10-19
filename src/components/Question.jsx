const Question = ({ children, number, txt }) => {
	return (
		<div className='question-holder'>
			<p className='question'>
				Pytanie {number + 1}: {txt}
			</p>
			{children}
		</div>
	);
};
export default Question;
