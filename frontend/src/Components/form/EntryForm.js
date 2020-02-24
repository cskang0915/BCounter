import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './EntryForm.css';
import X from '../../Pics/X/X.svg';

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
		fetch(`${process.env.REACT_APP_API}/api/budgetEntry/get/category/all`, {
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
        <h1>New Entry</h1>
        <form className="form" onSubmit={this.props.handleSubmit}>
          <label className="event-form-category">
            <div>Category</div>
            <select
              name = "category"
              onChange={this.props.handleChange}
            >
            {options}
            </select>
          </label>
          <br />
          <label className="event-form-category">
            <div>Amount</div>
            <input
              type="number"
              step="0.01"
              min="0"
              name="amount"
              placeholder="Amount"
              onChange={this.props.handleChange}
            />
          </label>
          <br />
          <label className="event-form-category">
            <div>Comment</div>
            <input 
              type="text"
              name="comment"
              placeholder="Comment"
              onChange={this.props.handleChange}
            />
          </label>
          <br />
          <input className="entry-form-submit" type="submit" value="Save" />
        </form>
        <Link className="back-button-x" to="/overview/weekly">
          <img src={X} className="X-icon" style={{height:35}} alt="X SVG"/>
        </Link>
      </div>
    )
  }
}

export default EntryForm
