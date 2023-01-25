import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';

export default function RenderChart () {
  
  const [time, setTime] = useState([0]);
  const [value, setValue] = useState([0]);
  const [array, setArray] = useState([]);
  const arrays = [...array];

  useEffect(() => {
    setArray([...value]);
  }, [value]);

  const NewTime = () => {
    let newTime = [(+time + 1)];
    setTime(() => [newTime]);
  }

  const BetterValue = () => {
    NewTime();
    let newValue = [(+value + 1)];
    setValue(() => [time, newValue]);
  }

  const SameValue = () => {
    NewTime();
    setValue(() => [time, value]);
  }

  const WorseValue = () => {
    NewTime();
    let newValue = [(+value - 1)];
    setValue(() => [time, newValue]);
  }

  const handleIncrement = (e) => {
    e.preventDefault();
    BetterValue();
  }

  const handleNoChange = (e) => {
    e.preventDefault();
    SameValue();
  }

  const handleDecrement = (e) => {
    e.preventDefault();
    WorseValue();
  }

  const handleReset = (e) => {
    e.preventDefault();
    setTime([0]);
    setValue([0]);
    setArray([]);
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
              data={[...arrays]}
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