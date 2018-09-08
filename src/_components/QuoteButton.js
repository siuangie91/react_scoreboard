import React from 'react';

const QuoteButton = (props) => {
	const { type, speakers, touchHandler, text } = props;

	return (
		<div className="quote-container quote-container">
			<div className="quote-btn" 
				type={type}
				speakers={speakers}
				onClick={touchHandler} >
				<p dangerouslySetInnerHTML={{__html: `"${text}"`}}></p>
			</div>
		</div>
	);
}

export default QuoteButton;