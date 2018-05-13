import React from 'react';

class PersonTypeButton extends React.Component {
	render() {
		return (
			<div className="big-btn type-btn"
				onClick={this.props.clickHandler}>
				<span className="btn-name type-name">{this.props.typename}</span>
			</div>			
		);
	}
}

export default PersonTypeButton;