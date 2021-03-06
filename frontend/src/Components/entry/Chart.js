import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import {defaults} from 'react-chartjs-2';
import NeedsIcon from '../../Pics/LegendIcons/Needs.svg'
import WantsIcon from '../../Pics/LegendIcons/Wants.svg'
import SavingsIcon from '../../Pics/LegendIcons/Savings.svg'

defaults.global.defaultFontColor = 'white';
defaults.global.onClick = {};
defaults.global.legend.display = false; 

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

  doNothing = () => {}

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
        <div className='cookies'>
          <img src={NeedsIcon} className="needs-icon" style={{height:35}} alt="Needs.SVG"/>
          <img src={WantsIcon} className="wants-icon" style={{height:35}} alt="Wants.SVG"/>
          <img src={SavingsIcon} className="savings-icon" style={{height:35}} alt="Savings.SVG"/>
        </div>
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
