import React, { Component } from 'react';

class BudgetEntry extends Component {
	render() {
		return (
			<ul>
				<li>{this.props.category}</li>
				<li>{this.props.amount}</li>
			</ul>
		)
	}
}

export default BudgetEntry