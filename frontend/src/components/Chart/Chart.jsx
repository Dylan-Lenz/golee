import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


function Chart() {
  
  const options = {
    title: {
      text: 'setGoal'
    },
    
    series: [
      {
        name: 'setInfluence',
        data: [-1, 0, 1, 2, 3, 2, 1, 0, -1, -2, -3]
      }
    ]
  };

  const Chart = () => (
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'chart'}
      options={options}
    />
  </div>
  );


    return (
        <Chart />
  );
}

export default Chart;