import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import jsPDF from "../../../package.json";
import htmlToImage from "../../../package.json";
import Highcharts from 'highcharts/highstock';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';
import '../Chart/Chart.css';
import useAuth from "../../hooks/useAuth";
import axios from "axios";

export default function RenderChart () {
  
  const [user, token] = useAuth();
  const [arr, setArr] = useState([0]);
  const [goals, setGoals] = useState([]);
  
  const navigate = useNavigate();
  const val = arr[arr.length-1];

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/user/goals/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setGoals(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchGoals();
  }, []);

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
            {goals &&
              goals.filter(goal=>(goal.is_current === true)
                ).map((goal) => (
                  <div key={goal.id}>
                    <Title>{goal.goal_name}</Title>
                  </div>
                )
              )
            }
            <Legend 
              layout="horizontal" 
              align="center" 
              verticalAlign="top" 
            />
          <XAxis></XAxis>
          <YAxis>
            {goals &&
              goals.filter(goal=>(goal.is_current === true)
                ).map((goal) => (
                  <div key={goal.id}>
                    <LineSeries
                      name= {goal.influence_name}
                      data={arr}
                    />
                  </div>
                )
              )
            }
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