import React from 'react';
import { connect } from 'react-redux';

class FactorButton extends React.Component {
	render() {
		const activeClass = (this.props.viewName === "secondaryFactors") ? "active" : "";
		const { touchHandler, field, buttonCopy, subfactors, subfactorToggler } = this.props;

		return(
			<div className="factor" name={this.props.field}>
				{
					(touchHandler) ? 
						<span className={`factor-btn primary-btn ${activeClass}`}
							name={field}
							onClick={touchHandler} >
							{buttonCopy}</span>
						:
						<span className={`factor-btn primary-btn ${activeClass}`}
							name={field} >
							{buttonCopy}</span>
				}
				<div className="subfactors">
					{
						(subfactors) ? 
							subfactors.map((subfactor, i) => {
								return (
									<span className="factor-btn subfactor-btn"
										key={i} 
										category={field}
										name={subfactor.field}
										onClick={subfactorToggler} >
										{subfactor.buttonCopy}</span>
								)
							})
							:
							""
					}
				</div>
			</div>
			
		);
	}
}

function mapStateToProps(state) {
	return {
		viewName: state.appView.viewName
	}
}

export default connect(mapStateToProps, null)(FactorButton);
