import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Subtitle, Legend, LineSeries
} from 'react-jsx-highcharts';


export default function RenderChart () {

  const [timeValue, setTimeValue] = useState([]);
  const [influenceValue, setInfluenceValue] = useState([]);
  const [inputData, setInputData] = useState([]);
  
  let dataDict = [...inputData, inputData];
  
  let rawData = {
    x: [+timeValue],
    y: [+influenceValue],
  }

  const handleIncrementData = (e) => {
    e.preventDefault();
    setTimeValue(+timeValue + 1);
    setInfluenceValue(+influenceValue + 1);
  }

  const handleNoChangeData = (e) => {
    e.preventDefault();
    setTimeValue(+timeValue + 1);
    setInfluenceValue(+influenceValue + 0);
  }

  const handleDecrementData = (e) => {
    e.preventDefault();
    setTimeValue(+timeValue + 1);
    setInfluenceValue(+influenceValue - 1);
  }

  const handleResetData = (e) => {
    e.preventDefault();
    setTimeValue([]);
    setInfluenceValue([]); 
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
          <XAxis 
            categories={rawData.x}>
          </XAxis>
          <YAxis>
            <LineSeries 
              name= 'Influence' 
              data= {rawData.y}
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
            <button onClick={handleIncrementData}>Better</button>
            <button onClick={handleNoChangeData}>Same</button>
            <button onClick={handleDecrementData}>Worse</button>            
            <button onClick={handleResetData}>Reset</button>            
            <button>Save</button>                   
      </div>
    </div>
  )
}