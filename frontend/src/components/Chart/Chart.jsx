import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';

export default function RenderChart () {

  const [value, setValue] = useState([0]);
  const values = [...value];

  const Better = () => {
    let better = [(+value + 1)];
    return setValue(() => [values, better]);
  }

  const Same = () => {
    let same = [(+value + 0)];
    return setValue(() => [values, same]);
  }

  const Worse = () => {
    let worse = [(+value - 1)];
    return setValue(() => [values, worse]);
  }

  const handleIncrement = (e) => {
    e.preventDefault();
    Better();
  }

  const handleNoChange = (e) => {
    e.preventDefault();
    Same();
  }

  const handleDecrement = (e) => {
    e.preventDefault();
    Worse();
  }

  const handleReset = (e) => {
    e.preventDefault();
    setValue([0]);
  }

  const Chart1 = () => (
    <div>
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart>
          <Chart/>
          <Title>GOAL</Title>
            <Legend 
              layout="horizontal" 
              align="center" 
              verticalAlign="top" 
            />
          <XAxis></XAxis>
          <YAxis>
            <LineSeries 
              name= 'Influence' 
              data={[...values]}
            />
          </YAxis>
        </HighchartsChart>
      </HighchartsProvider>
    </div>
  );
  
  return (
    <div>
      <div>
          <Chart1/>                   
            <p>Influence</p>          
            <button onClick={handleIncrement}>Better</button>
            <button onClick={handleNoChange}>Same</button>
            <button onClick={handleDecrement}>Worse</button>            
            <button onClick={handleReset}>Reset</button>            
            <button>Save</button>                   
      </div>
    </div>
  )
}