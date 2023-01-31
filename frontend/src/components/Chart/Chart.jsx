import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import jsPDF from "../../../package.json";
import htmlToImage from "../../../package.json";
import Highcharts from 'highcharts/highstock';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';
import '../Chart/Chart.css';

export default function RenderChart () {
  
  const [arr, setArr] = useState([0]);
  const navigate = useNavigate();
  let val = arr[arr.length-1];

  const handIncrement = (e) => {
    e.preventDefault();
    let newVal = (val + 1);
    arr.push(newVal);
    setArr([...arr]);
  }

  const handNoChange = (e) => {
    e.preventDefault();
    arr.push(val);
    setArr([...arr]);
  }

  const handDecrement = (e) => {
    e.preventDefault();
    let newVal = (val - 1);
    arr.push(newVal);
    setArr([...arr]);
  }

  const handleReset = (e) => {
    e.preventDefault();
    setArr([0]);
  }

  const handChartToPdf = (e) => {
    e.preventDefault();
    const doc = new jsPDF(Charted);
    const img = htmlToImage.toPng(doc);
    return doc.setImg(img, "PNG");
  }

  const Charted = () => (
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
              data={arr}
            />
          </YAxis>
        </HighchartsChart>
      </HighchartsProvider>
    </div>
  );
  
  return (
    <div>
        <Charted className="custom-chart"/>                   
          <button onClick={handIncrement}>Better</button>
          <button onClick={handNoChange}>Same</button>
          <button onClick={handDecrement}>Worse</button>            
          <button onClick={handleReset}>Reset</button>            
          <button onClick={handChartToPdf}>Save</button>
          <button onClick={() => navigate("/past")}>Done</button>                      
    </div>
  )
}