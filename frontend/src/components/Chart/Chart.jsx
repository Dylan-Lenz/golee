import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';
import '../Chart/Chart.css';
import useAuth from "../../hooks/useAuth";
import axios from "axios";

export default function RenderChart () {
  
  const [user, token] = useAuth();
  const navigate = useNavigate();

  const [arr, setArr] = useState([0]);
  const val = arr[arr.length-1];
  
  const [goals, setGoals] = useState([]);
  const [current, setCurrent] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    fetchGoals();
  }, [current]);

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
  
  const currentGoal = () => { 
    goals.filter(goal => {
      if (goal.is_current === true) {  
        setId(goal.id);
        setCurrent(goal);
      }       
    })
  }
   
  let pastGoal = {
    goal_name: current.goal_name,
    influence_name: current.influence_name, 
    influence_value: current.influence_value,
    is_current: false,
    user_id: user.id, 
  }

  let currentInfluence = {
    goal_name: current.goal_name,
    influence_name: current.influence_name, 
    influence_value: parseInt(val),
    is_current: current.is_current,
    user_id: user.id, 
  }
   
  const updateGoal = async () => {
    try {
        let response = await axios.put(`http://127.0.0.1:8000/api/user/goals/${id}/`, pastGoal,{
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const updateInfluence = async () => {
    try {
        let response = await axios.put(`http://127.0.0.1:8000/api/user/goals/${id}/`, currentInfluence,{
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleDone = (e) => {
    e.preventDefault();
    updateGoal();
    navigate("/past");
  }

  const handleSave = (e) => { 
    e.preventDefault();
    currentGoal();
    updateInfluence();
  };

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
    <div >
      <ul className="chrt_cont">
        <li className="chrt_col">
          <Charted/>
        </li>
        <li className="b_col">
          <button onClick={(e)=>handIncrement(e)}>Better</button>
          <button onClick={(e)=>handNoChange(e)}>Same</button>
          <button onClick={(e)=>handDecrement(e)}>Worse</button>       
          <button onClick={(e)=>handleReset(e)}>Reset</button>            
          <button onClick={(e)=>handleSave(e)}>Save</button>
          <button  onClick={(e)=>handleDone(e)}>Done</button>                    
        </li>
      </ul>        
    </div>
  )
}

