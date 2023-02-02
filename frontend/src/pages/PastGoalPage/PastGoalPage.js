import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const PastGoalPage = () => {
  const [user, token] = useAuth();
  const [goals, setGoals] = useState([]);

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
  }, [token]);

  const deleteGoal = async () => {
    try {
      let response = await axios.delete("http://127.0.0.1:8000/api/user/goals/19/", {
        headers: {
          Authorization: "Bearer " + token,
        },
        data:{
          goal_name: 'test',
          influence_name: 'test',
          influence_value: '0',
          user_id: user.id,
        }
      });
      console.log('Success');
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  };
  
  return (
    <div className="container">
      <h1>PAST GOALS</h1>
      {goals &&
        goals.filter(goal=>(goal.is_current === false)
          ).map((goal) => (
          <div key={goal.id}>
            <ul>
              <li>
                <p>{goal.goal_name}</p>
              </li>
              <li>
                <p>{goal.influence_name}</p>
              </li>
              <button onClick={deleteGoal}>DELETE</button>
              <button>Export</button>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default PastGoalPage;