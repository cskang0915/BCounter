import React, { Component } from 'react';
import EntryForm from '../../Components/form/EntryForm';
import moment from 'moment';

class EntryFormContainer extends Component {

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
    if(this.props.rowid){
      this.setState({
        userId: null,
        amount: this.props.amount,
        category: this.props.category,
        dayOfEntry: this.props.dayOfEntry,
        weekOfEntry: this.props.weekOfEntry,
        monthOfEntry: this.props.monthOfEntry,
        yearOfEntry: this.props.yearOfEntry,
        comment: this.props.comment
      })
    }
  }

  handleChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.value
    this.setState({[name]:value})
  }

  // POST request via form
  handleSubmit = (event) => {
    event.preventDefault();
    let day = moment().format('D')
    let week = moment().format('W')
    let month = moment().format('M')
    let year = moment().format('Y')

    this.state.dayOfEntry = day
    this.state.weekOfEntry = week
    this.state.monthOfEntry = month
    this.state.yearOfEntry = year

    fetch(`${process.env.REACT_APP_API}/api/budgetEntry/new`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${localStorage.uid}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    })
    .then(response => this.setState({
      userId: null,
      amount: '',
      category: null,
      dayOfEntry: null,
      weekOfEntry: null,
      monthOfEntry: null,
      yearOfEntry: null,
      comment: ''
    }))
    // console.log(`/overview/${this.props.time}`)
    // this.props.hamburgerMenuVisibility = "visible"
    this.props.history.push(`/overview/${this.props.time}`)
  };

  render() {

    return (
      <div>
        <EntryForm 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
      </div>
    )
  }
}

export default EntryFormContainer
