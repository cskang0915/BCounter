import React, { Component } from 'react';

class OverviewTimeContainer extends Component {
	render(){
		
		let test = this.props.data.map((test) => {
			return <p>hello</p>
		})

		return(
			<div>
				{test}
			</div>
		)
	}
}

export default OverviewTimeContainer