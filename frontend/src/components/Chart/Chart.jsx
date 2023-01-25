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
    return setTime(() => [newTime]);
  }

  const Better = () => {
    NewTime();
    let newValue = [(+value + 1)];
    return setValue(() => [time, newValue]);
  }

  const Same = () => {
    NewTime();
    let newValue = [(+value + 0)];
    return setValue(() => [time, newValue]);
  }

  const Worse = () => {
    NewTime();
    let newValue = [(+value - 1)];
    return setValue(() => [time, newValue]);
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