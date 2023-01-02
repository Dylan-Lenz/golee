import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';




function Chart() {

  const [data, setData] = useState([0]);
  let incrementData = () => setData([data + 1]);
  let noChangeData = () => ([data]);
  let decrementData = () => setData([data - 1]);
  let resetData = () => setData([0]);
  
    
    const options = {
      title: {
        text: 'setGoal',
      },
      
      series: [
        {
          name: 'setInfluence',
          data: [...data, data],
        }
      ],
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
        <div>
            <Chart />
          <ul>
              <li>
                  <p>Influence</p>
              </li>
              <li>
                  <button onClick={incrementData}>Better</button>
              </li>
              <li>
                  <button onClick={noChangeData}>Same</button>
              </li>
              <li>
                  <button onClick={decrementData}>Worse</button>
              </li>
              <li>
                  <button onClick={resetData}>Reset</button>
              </li>
              <li>
                  <button>Save</button>
              </li>
          </ul>
      </div>
    )
  };
  
  export default Chart;