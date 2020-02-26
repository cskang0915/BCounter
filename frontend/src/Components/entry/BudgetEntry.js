import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Pencil from '../../Pics/Pencil/Pencil.svg';
import Trash from '../../Pics/Trashcan/Trashcandark.svg';

class BudgetEntry extends Component {

	render() {
		return (
			<div style={{display: this.props.style}}>
				<li className="budgetEntry-comment-specific"><b className="budgetEntry-comment"></b>{this.props.data.comment}</li>
				<li className="budgetEntry-amount-specific" ><b className="budgetEntry-amount"></b>${this.props.data.amount}</li>
				<li className="budgetEntry-date-specific"><b className="budgetEntry-date"></b>{this.props.data.monthOfEntry}/{this.props.data.dayOfEntry}/{this.props.data.yearOfEntry}</li>
				<Link to = {`/overview/update/${this.props.time}/${this.props.rowid}`}>
					<button className="editButton">
						<img src={Pencil} className="pencil-icon" style={{backgroundColor: "white", height:25}} alt="Pencil SVG"/>
					</button>
				</Link>
				{/* <button className="deleteButton"onClick={this.handleDelete} >
					<img src={Trash} className="pencil-icon" style={{backgroundColor: "#E2C792", height:35}} alt="Trashcan Dark SVG"/>
				</button> */}
			</div>
		)
	}
}

export default BudgetEntry
