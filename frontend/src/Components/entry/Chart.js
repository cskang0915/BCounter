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
            'rgba(0, 0, 0, 0.6)',
            'rgba(0, 0, 0, 0.6)',
            'rgba(0, 0, 0, 0.6)'
          ]
        }
      ]
    },
    total: null,
    sumNeeds: null,
    sumWants: null,
    sumSavings: null
  }

  componentDidMount() {
    this.calculateBudgetValues()
  }

  calculateBudgetValues = () => {
    let sumNeeds = 0;
    let sumWants = 0;
    let sumSavings = 0;
    let state = this.props.state

    for(let i = 0; i < state.needs.length; i++){
      let parsed = parseFloat(state.needs[i].amount)
      sumNeeds = sumNeeds + parsed
    }

    for(let i = 0; i < state.wants.length; i++){
      let parsed = parseFloat(state.wants[i].amount)
      sumWants = sumWants + parsed
    }

    for(let i = 0; i < state.savings.length; i++){
      let parsed = parseFloat(state.savings[i].amount)
      sumSavings = sumSavings + parsed
    }

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
            borderColor:[
              'rgb(0, 0, 0)',
              'rgb(0, 0, 0)',
              'rgb(0, 0, 0)'
            ],
            backgroundColor:[
              'rgb(196, 196, 196)',
              'rgb(255, 255, 255)',
              'rgb(226, 199, 146)'
            ],
          }
        ]
      },
      sumNeeds: sumNeeds,
      sumWants: sumWants,
      sumSavings: sumSavings
    })
  }

  render() {
    return (
      <div>
        <div className="chart">
          <Pie 
            width={400}
            height={400}
            data={this.state.chartData}
            options={{
              reponsive: true,
              maintainAspectRatio: false
            }}
          />
        </div>
        <h2 className="total-spent"><b>Total Spent: </b>${(this.state.sumNeeds + this.state.sumWants + this.state.sumSavings).toFixed(2)}</h2>
      </div>
    )
  }
}

export default Chart
