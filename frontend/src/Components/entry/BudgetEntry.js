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
				<li className="budgetEntry-comment-specific"><b className="budgetEntry-comment">Comment: </b>{this.props.data.comment}</li>
				<li className="budgetEntry-amount-specific"><b className="budgetEntry-amount">Amount: </b>${this.props.data.amount}.00</li>
				<li className="budgetEntry-date-specific"><b className="budgetEntry-date">Date: </b>{this.props.data.monthOfEntry}/{this.props.data.dayOfEntry}/{this.props.data.yearOfEntry}</li>
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