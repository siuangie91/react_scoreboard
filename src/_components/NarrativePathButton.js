import React from 'react';

class NarrativePathButton extends React.Component {
	render() {
		return (
			<div className="big-btn path-btn"
				onClick={this.props.clickHandler}>
				<span className="btn-name path-name">{this.props.pathname}</span>
			</div>			
		);
	}
}

export default NarrativePathButton;