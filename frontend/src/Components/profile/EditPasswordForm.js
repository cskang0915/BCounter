import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditPasswordForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input 
            type="password"
            name="password"
            className="password"
            placeholder="password"
            value={this.props.state.password}
            onChange={this.props.handleChange}
          />
          <input 
            type="password"
            name="password2"
            className="password2"
            placeholder="confirm password"
            value={this.props.state.password2}
            onChange={this.props.handleChange}
          />
          <button
            type="submit"
            className="change-password-button"
          >Change Password
          </button>
        </form>
        <Link className="back-button-x" to="/overview/weekly">X</Link>
      </div>
    )
  }
}

export default EditPasswordForm
