import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DeleteConfirmation.css'

class DeleteConfirmation extends Component {

  deleteUserInfo = () => {
		fetch(`${process.env.REACT_APP_API}/api/user/delete`, {
			method: "DELETE",
			headers: {
				"authorization": `Bearer ${localStorage.uid}`
			}
		})
		.then(() => localStorage.removeItem('uid'))
		.then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div>
        <h1 className="delete-h1">Are you sure you want to delete your account?</h1>
        <div className="button-container">
          {/* <div className="yes-delete"> */}
            <button className="yes-delete" onClick={this.deleteUserInfo}>Yes</button>
          {/* </div> */}
          {/* <div className="no-delete"> */}
            <Link to='/overview/profile'><button className="no-delete">No</button></Link>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default DeleteConfirmation
