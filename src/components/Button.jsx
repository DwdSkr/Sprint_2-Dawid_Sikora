function Button({ className = 'default', text, onClick }) {
	return (
		<button onClick={onClick} className={className}>
			{text}
		</button>
	);
}
export default Button;
