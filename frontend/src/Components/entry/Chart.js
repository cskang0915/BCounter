import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class Chart extends Component {

  state = {
    chartData: {
      labels: ['Needs', 'Wants', 'Savings'],
      datasets: [
        {
          label: 'Percentages',
          data: [
            null, 
            null, 
            null
          ],
          backgroundColor:[
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(0, 255, 255, 0.6)'
          ]
        }
      ]
    },
    total: null
  }

  componentDidMount() {
    this.calculateBudgetValues()
  }

  calculateBudgetValues = () => {
    let sumNeeds = 0;
    let sumWants = 0;
    let sumSavings = 0;
    let state = this.props.state
    console.log(state.needs)
    
    for(let i = 0; i < state.needs.length; i++){
      console.log('here')
      console.log(state.needs[i].amount)
      let parsed = parseInt(state.needs[i].amount)
      console.log(parsed)
      sumNeeds = sumNeeds + parsed
    }

    for(let i = 0; i < state.wants.length; i++){
      let parsed = parseInt(state.wants[i].amount)
      sumWants = sumWants + parsed
    }

    for(let i = 0; i < state.savings.length; i++){
      let parsed = parseInt(state.savings[i].amount)
      sumSavings = sumSavings + parsed
    }
    console.log('herehrerh')
    console.log(sumNeeds, sumWants, sumSavings)


    this.setState({
      chartData: {
        labels: ['Needs', 'Wants', 'Savings'],
        datasets: [
          {
            label: 'Percentages',
            data: [
              sumNeeds, 
              sumWants, 
              sumSavings
            ],
            backgroundColor:[
              'rgba(255, 0, 0, 0.6)',
              'rgba(255, 255, 0, 0.6)',
              'rgba(0, 255, 255, 0.6)'
            ]
          }
        ]
      }    })
  }

  render() {
    return (
      <div className="chart">
        <Pie 
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

export default Chart
