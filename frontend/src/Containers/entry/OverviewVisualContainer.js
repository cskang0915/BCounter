import React, { Component } from 'react';
import Chart from '../../Components/entry/Chart';

class OverviewVisualContainer extends Component {
  render() {
    return (
      <div>
        {
          (this.props.state.needs.length > 0 || this.props.state.wants.length > 0 || this.props.state.savings.length > 0)
          ? <Chart state={this.props.state} />
          : <p>loading...</p>
        }
      </div>
    )
  }
}

export default OverviewVisualContainer;
