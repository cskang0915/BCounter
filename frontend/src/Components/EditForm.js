import React, { Component } from 'react';

class EditForm extends Component {

  state = {
    
  }

  updateEntry = () => {
    fetch(`http://localhost:4000/api/budgetEntry/update/${this.props.rowid}`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${localStorage.uid}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName: this.state.eventName,
        eventDescription: this.state.eventDescription,
        location: this.state.location,
        time: this.state.time,
        month: this.state.month,
        day: this.state.day,
        year: this.state.year
      })
    })
    //  .then(()=> this.props.getEvents())
    //  .then(()=> this.props.history.push('/Calendar'))
  }
  render() {
    return (
      <div className="eventForm">
        <h1>Entry Form</h1>
        <form className="form" onSubmit={this.props.handleSubmit}>
          <label>
            Amount:
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              // value={this.props.state.amount}
              onChange={this.props.handleChange}
            />
          </label>
          <br />
          <label>
            Category:
            <select
              name = "category"
              onChange={this.props.handleChange}
            >
            {options}
            </select>
          </label>
          <br />
          <label>
            Comment:
            <input 
              type="text"
              name="comment"
              placeholder="Comment"
              onChange={this.props.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default EditForm
