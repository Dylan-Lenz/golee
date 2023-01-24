import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';


export default function RenderChart () {

  const [time, setTime] = useState([]);
  const [influence, setInfluence] = useState([]);
  const [object, setObject] = useState({});
  const [array, setArray] = useState([]);

  const plotPts = {...array};

  const AddNewObject = () => {
    let newObj = {
      x: [time],
      y: [influence],
    };
    setObject(newObj);
    AddObjectToArray();
  }

  const AddObjectToArray = (obj) => {
    let newArr = {...object, obj};
    setArray(newArr);
  }

  const AddTime = () => {
    let addTime = (+time + 1);
    let newTime = {...time, addTime};
    return newTime;
  }

  const BetterInfluence = () => {
    let addInfluence = (+influence + 1);
    let newInfluence = {...influence, addInfluence};
    return newInfluence;
  }

  const SameInfluence = () => {
    let sameInfluence = (+influence + 0);
    let newInfluence = {...influence, sameInfluence};
    return newInfluence;
  }

  const WorseInfluence = () => {
    let worseInfluence = (+influence - 1);
    let newInfluence = {...influence, worseInfluence};
    return newInfluence;
  }

  const handleIncrement = (e) => {
    e.preventDefault();
    setTime(AddTime);
    setInfluence(BetterInfluence);
    AddNewObject();
  }

  const handleNoChange = (e) => {
    e.preventDefault();
    setTime(AddTime);
    setInfluence(SameInfluence);
    AddNewObject();
  }

  const handleDecrement = (e) => {
    e.preventDefault();
    setTime(AddTime);
    setInfluence(WorseInfluence);
    AddNewObject();
  }

  const handleReset = (e) => {
    e.preventDefault();
    setTime(0);
    setInfluence(0);
    AddNewObject();
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
            categories={plotPts.x}>
          </XAxis>
          <YAxis>
            <LineSeries 
              name= 'Influence' 
              data={plotPts.y}
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