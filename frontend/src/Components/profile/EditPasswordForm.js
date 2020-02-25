import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './EditPasswordForm.css'

class EditPasswordForm extends Component {
  render() {
    return (
      <div>
        <form className="editPasswordForm" onSubmit={this.props.handleSubmit}>
          <p className="currentPassword">Current Password</p>
          <input className="passwordEdit"
            type="password"
            name="password"
            className="password"
            placeholder="password"
            value={this.props.state.password}
            onChange={this.props.handleChange}
          />
          <p className="newPassword">New Password</p>
          <input className="password2Edit"
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
          >Save
          </button>
        </form>
        <Link className="back-button-x" to="/overview/profile">X</Link>
      </div>
    )
  }
}

export default EditPasswordForm
