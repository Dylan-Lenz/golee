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
      <h1>PAST GOAL</h1>
      {goals &&
        goals.map((goals) => (
          <p key={goals.id}>
            {goals.goal_name}
          </p>
        ))}
    </div>
  );
};

export default PastGoalPage;