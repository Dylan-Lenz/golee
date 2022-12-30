import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Chart from "../../components/Chart/Chart";


const CurrentGoalPage = () => {
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
      <h1>CURRENT GOAL</h1>
      {goals &&
        goals.map((goals) => (
          <p key={goals.id}>
            {goals.goal_name}
          </p>
        ))}
      <div>
        <Chart />
      </div>
    </div>
  );
};

export default CurrentGoalPage;