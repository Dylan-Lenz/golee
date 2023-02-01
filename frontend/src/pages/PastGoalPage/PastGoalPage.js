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
  
  return (
    <div className="container">
      <h1>PAST GOALS</h1>
      {goals &&
        goals.filter(goal=>(goal.is_current === false)
          ).map((goal) => (
          <p key={goal.id}>
            <p>{goal.goal_name}</p>
            <p>{goal.influence_name}</p>
          </p>
        ))}
    </div>
  );
};

export default PastGoalPage;