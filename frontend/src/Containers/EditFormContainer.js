import React, { Component } from 'react';
import EditForm from '../Components/EditForm';

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
    const entry = this.state
    fetch(`http://localhost:4000/api/budgetEntry/update/${this.props.rowid}`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${localStorage.uid}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entry)
    })
  }

  getById = () => {
		fetch(`http://localhost:4000/api/budgetEntry/get/${this.props.rowid}`, {
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
			.then((response) => response.json())
			.then(data => {
				console.log('get by id')
				console.log(data)
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
			.then(() => {
				console.log(this.state)
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
