import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Subtitle, Legend, LineSeries
} from 'react-jsx-highcharts';




export default function RenderChart () {

  const [influenceValue, setInfluenceValue] = useState([0]);
  const [timeValue, setTimeValue] = useState([0]);
  let time = [...timeValue, timeValue];
  let influence = [...influenceValue, influenceValue];
  let data = [time, influence];

  const handleIncrementData = (e) => {
    e.preventDefault();
    setInfluenceValue((influenceValue + 1)); 
    setTimeValue((timeValue + 1));
  }

  const handleSameData = (e) => {
    e.preventDefault();
    setInfluenceValue((influence + 0)); 
    setTimeValue((time + 1));
  }

  const handleDecrementData = (e) => {
    e.preventDefault();
    setInfluenceValue((influence - 1)); 
    setTimeValue((time + 1));
  }

  const handleResetChart = (e) => {
    e.preventDefault();
    setInfluenceValue([0]); 
    setTimeValue([0]);
  }
  
  const Chart1 = () => (
    <div >
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart >
          <Chart />
          <Title>GOAL</Title>
          <Legend layout="horizontal" align="center" verticalAlign="top" />
          <XAxis categories={time}>
          </XAxis>
          <YAxis>
              <LineSeries 
                name= 'Influence' 
                data={data} 
              />
          </YAxis>
        </HighchartsChart>
      </HighchartsProvider>
    </div>
  );
  
  return (
    <div>
      <div>
          <Chart1 />                   
            <p>Influence</p>          
            <button onClick={handleIncrementData}>Better</button>
            <button onClick={handleSameData}>Same</button>
            <button onClick={handleDecrementData}>Worse</button>            
            <button onClick={handleResetChart}>Reset</button>            
            <button>Save</button>                   
      </div>
    </div>
  )
}
