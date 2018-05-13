import React from 'react';

class QuoteButton extends React.Component {
	render() {
		// console.log('QuoteButton.props', this.props);

		return (
			<div className="quote-container quote-container">
				<div className="quote-btn" 
					type={this.props.type}
					speakers={this.props.speakers}
					onClick={this.props.touchHandler} >
					<p dangerouslySetInnerHTML={{__html: `"${this.props.text}"`}}></p>
				</div>
			</div>
		);
	}
}

export default QuoteButton;