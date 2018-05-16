import React from 'react';

import { toTitleCase } from '../_helpers';

class PersonTypeButton extends React.Component {
	render() {
		return (
			<div className="big-btn type-btn" type={this.props.typename}
				onClick={this.props.clickHandler}>
				<span className="btn-name type-name">{toTitleCase(this.props.typename)}</span>
			</div>			
		);
	}
}

export default PersonTypeButton;