import React from 'react';
// import { Fragment } from 'react';
import { connect } from 'react-redux';

class FactorButton extends React.Component {
	/*constructor(props) {
		super(props);

	}*/
	render() {
		// console.log('FactorButton.props', this.props)
		// console.log('refs', this.isSelected);

		const activeClass = (this.props.viewName === "secondaryFactors") ? "active" : "";

		return(
			<div className="factor" name={this.props.field}>
				{
					(this.props.touchHandler) ? 
						<span className={`factor-btn primary-btn ${activeClass}`}
							name={this.props.field}
							onClick={this.props.touchHandler} >
							{this.props.buttonCopy}</span>
						:
						<span className={`factor-btn primary-btn ${activeClass}`}
							name={this.props.field} >
							{this.props.buttonCopy}</span>
				}
				<div className="subfactors">
					{
						(this.props.subfactors) ? 
							this.props.subfactors.map((subfactor, i) => {
								return (
									<span className="factor-btn subfactor-btn"
										key={i} 
										category={this.props.field}
										name={subfactor.field}
										onClick={this.props.subfactorToggler} >
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
