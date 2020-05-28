import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';



export class Chart extends Component{
    constructor(props){
      super(props);
      this.state = {
        charData: {
          labels: ["Active", "Deaths", "Recovered"],
          datasets: [
            {
              label: "Current Status",
              borderWidth: 2,
              data: [],
  
              backgroundColor: [
                "red",
                "rgb(215,65,54)",
                "rgb(255,255,0)",
                "rgb(245,222,179)",
              ],
            },
          ],
        },
      };
    }
  
    render() {
      return (
        <div>
          <Bar
            data={this.state.charData}
            width={100}
            height={500}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      );
    }
  }
  export default Chart;




