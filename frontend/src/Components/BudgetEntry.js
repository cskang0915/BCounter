import React, { Component } from 'react';

class BudgetEntry extends Component {
	render() {
		return (
			<ul>
				<li>{this.props.data.category}</li>
				<li>{this.props.data.amount}</li>
			</ul>
		)
	}
}

export default BudgetEntry