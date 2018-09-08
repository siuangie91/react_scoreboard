import React from 'react';
import { toTitleCase } from '../_helpers';

const PersonTypeButton = (props) => {
	const { typename, clickHandler } = props;
	return (
		<div className="big-btn type-btn" type={typename}
			onClick={clickHandler}>
			<span className="btn-name type-name">{toTitleCase(typename)}</span>
		</div>			
	);
}

export default PersonTypeButton;