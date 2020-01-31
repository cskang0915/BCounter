import React, { Component } from 'react';
import OverviewVisualComponent from '../Components/OverviewVisualComponent'

class OverviewTimeContainer extends Component {
	render(){

		let test = this.props.data.map((test) => {
			return <p>hello</p>
		})

		return(
			<div>
				{test}
				<OverviewVisualComponent />
			</div>
		)
	}
}

export default OverviewTimeContainer