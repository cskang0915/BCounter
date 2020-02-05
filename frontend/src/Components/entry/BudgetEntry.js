import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BudgetEntry extends Component {
	handleDelete = () => {
		fetch(`http://localhost:4000/api/budgetEntry/delete/${this.props.rowid}`, {
			method: "DELETE",
			headers: {
				"authorization": `Bearer ${localStorage.uid}`,
				"Content-Type": "application/json"
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data.status === 200){
				console.log('deleted successfully')
			} else {
				console.log('deleted unsuccessfully')
			}
		})
		.catch(err => console.log(err))
		window.location.reload(true)
	}

	render() {
		return (
			<div>
				<li>{this.props.data.category}</li>
				<li>{this.props.data.amount}</li>
				<button onClick={this.handleDelete}>Delete entry</button>
				<Link to = {`/overview/update/${this.props.rowid}`}>
					<button>
						Edit
					</button>
				</Link>
			</div>
		)
	}
}

export default BudgetEntry