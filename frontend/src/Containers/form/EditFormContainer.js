import React, { Component } from 'react';
import EditForm from '../../Components/form/EditForm';

class EditFormContainer extends Component {

  state = {
    userId: null,
    amount: '',
    category: 1,
    dayOfEntry: null,
    weekOfEntry: null,
    monthOfEntry: null,
    yearOfEntry: null,
    comment: ''
  }
  componentDidMount() {
    this.getById();
  }

  handleChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.value
    this.setState({[name]:value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const entry = this.state
    fetch(`${process.env.REACT_APP_API}/api/budgetEntry/update/${this.props.rowid}`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${localStorage.uid}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entry)
    })
    window.location.reload(true);
  }

  getById = () => {
		fetch(`${process.env.REACT_APP_API}/api/budgetEntry/get/${this.props.rowid}`, {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
			.then((response) => response.json())
			.then(data => {
				this.setState({
          amount: data[0].amount,
          category: data[0].category,
          dayOfEntry: data[0].dayOfEntry,
          weekOfEntry: data[0].weekOfEntry,
          monthOfEntry: data[0].monthOfEntry,
          yearOfEntry: data[0].yearOfEntry,
          comment: data[0].comment

				})
			})
			.catch(error => console.log(error))
		}

  render() {
    return (
      <div>
        <EditForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default EditFormContainer
