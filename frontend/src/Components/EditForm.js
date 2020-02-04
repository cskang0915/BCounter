import React, { Component } from 'react';
import {Link} from "react-router-dom";

class EditForm extends Component {

  state = {
    category_name: '',
    category_rowid: null
  }

  componentDidMount() {
    this.getByCategory();
  }

  getByCategory = () => {
		fetch(`http://localhost:4000/api/budgetEntry/get/category/all`, {
			headers: {
        "authorization": `Bearer ${localStorage.uid}`,
        "Content-Type":"applicaton/json"
			}
		})
			.then((response) => response.json())
			.then(data => {
				console.log(data)
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
        if(this.props.state.category === category.rowid){
          return <option value={category.rowid} selected="selected">{category.category}</option>
        } else{
          return <option value={category.rowid}>{category.category}</option>
        }
      })
    }
    return (
      <div className="eventForm">
        <h1>Edit Form</h1>
        <form className="form" onSubmit={this.props.handleSubmit}>
          <label>
            Amount:
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              value={this.props.state.amount}
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
              value={this.props.state.comment}
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

export default EditForm
