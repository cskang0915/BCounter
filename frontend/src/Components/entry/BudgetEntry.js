import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BudgetEntry extends Component {
	handleDelete = () => {
		fetch(`${process.env.REACT_APP_API}/api/budgetEntry/delete/${this.props.rowid}`, {
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
				<li className="budgetEntry-comment-specific"><b className="budgetEntry-comment"></b>{this.props.data.comment}</li>
				<li className="budgetEntry-amount-specific"><b className="budgetEntry-amount"></b>${this.props.data.amount}</li>
				<li className="budgetEntry-date-specific"><b className="budgetEntry-date"></b>{this.props.data.monthOfEntry}/{this.props.data.dayOfEntry}/{this.props.data.yearOfEntry}</li>
				<Link to = {`/overview/update/${this.props.time}/${this.props.rowid}`}>
					<button className="editButton">
						Edit
					</button>
				</Link>
				<button className="deleteButton"onClick={this.handleDelete} >Delete entry</button>
			</div>
		)
	}
}

export default BudgetEntry
