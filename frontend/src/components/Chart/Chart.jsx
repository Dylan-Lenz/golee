import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';


export default function RenderChart () {

  const [influence, setInfluence] = useState([0]);
  const yPts = [...influence];

  const Better = () => {
    let better = (+influence + 1);
    setInfluence((influence) => [...influence, better]);
  }

  const Same = () => {
    let same = (+influence + 0);
    setInfluence((influence) => [...influence, same]);
  }

  const Worse = () => {
    let worse = (+influence - 1);
    setInfluence((influence) => [...influence, worse]);
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
    setInfluence([0]);
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
          <XAxis>
          </XAxis>
          <YAxis>
            <LineSeries 
              name= 'Influence' 
              data={[...yPts]}
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