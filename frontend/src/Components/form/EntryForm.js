import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './EntryForm.css'

class EntryForm extends Component {

  // drop down menu
  state = {
    category_name: '',
    category_rowid: null
  }

  componentDidMount() {
    this.getByCategory()
  }

  // get by category fetch
  getByCategory = () => {
		fetch(`http://localhost:4000/api/budgetEntry/get/category/all`, {
			headers: {
        "authorization": `Bearer ${localStorage.uid}`,
        "Content-Type":"applicaton/json"
			}
		})
			.then((response) => response.json())
			.then(data => {
				this.setState({
					category_name: data
				})
			})
			.catch(error => console.log(error))
		}

  render() {
    let options
    if (this.state.category_name.length > 0) {
      options = this.state.category_name.map(category => {
        return <option value={category.rowid}>{category.category}</option>
      })
    }
    return (
      <div className="event-form">
        <h1>Entry Form</h1>
        <form className="form" onSubmit={this.props.handleSubmit}>
          <label>
            Amount:
            <input
              type="text"
              name="amount"
              placeholder="Amount"
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
        <Link to="/overview/weekly"><button>Go back</button></Link>
      </div>
    )
  }
}

export default EntryForm
