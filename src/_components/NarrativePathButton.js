import React from 'react';

const NarrativePathButton = (props) => {
	const { clickHandler, pathname } = props;

	return (
		<div className="big-btn path-btn"
			onClick={clickHandler}>
			<span className="btn-name path-name">{pathname}</span>
		</div>			
	);
}

export default NarrativePathButton;