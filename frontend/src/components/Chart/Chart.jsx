import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';
import '../Chart/Chart.css';
import { exportMultipleChartsToPdf } from "../../utils/utils";

export default function RenderChart () {
  
  const [arr, setArr] = useState([0]);
  let val = arr[arr.length-1];

  const Increment = () => {
    let newVal = (val + 1);
    arr.push(newVal);
    setArr([...arr]);
  }

  const NoChange = () => {
    arr.push(val);
    setArr([...arr]);
  }

  const Decrement = () => {
    let newVal = (val - 1);
    arr.push(newVal);
    setArr([...arr]);
  }

  const handInc = (e) => {
    e.preventDefault();
    Increment();
  }

  const handNC = (e) => {
    e.preventDefault();
    NoChange();
  }

  const handDec = (e) => {
    e.preventDefault();
    Decrement();
  }

  const handleReset = (e) => {
    e.preventDefault();
    setArr([0]);
  }

  const Chart1 = () => (
    <div>
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart styledMode>
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
              className='series'
              data={arr}
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
            <button onClick={handInc}>Better</button>
            <button onClick={handNC}>Same</button>
            <button onClick={handDec}>Worse</button>            
            <button onClick={handleReset}>Reset</button>            
            <button onClick={exportMultipleChartsToPdf}>Save</button>                   
      </div>
    </div>
  )
}