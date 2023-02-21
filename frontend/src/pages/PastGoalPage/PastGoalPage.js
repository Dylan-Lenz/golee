import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const PastGoalPage = () => {
  
  const [user, token] = useAuth();
  const [goals, setGoals] = useState([]);
  
  useEffect(() => {
    fetchGoals();
  }, [goals]);

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
  
  const handleDelete = async (id) => {
    try {
        let response = await axios.delete(`http://127.0.0.1:8000/api/user/goals/${id}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
          data: {
            id: id,
            goal_name: 'text',
            influence_name: 'text',
            influence_value: 0,
            user_id: user.id,
          }
        }
      );
      setGoals(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
      <h1>PAST GOALS</h1>
          <table >
            <thead>
              <tr>
                <th><h3>Name</h3></th>
                <th><h3>Influence</h3></th>
                <th><h3>Value</h3></th>
              </tr>
            </thead>
            {goals && goals.filter((goal)=>(goal.is_current === false)
            ).map((goal) => (
              <tbody key={goal.id}>
                <tr>
                  <td><p>{goal.goal_name}</p></td>
                  <td><p>{goal.influence_name}</p></td>
                  <td><p>{goal.influence_value}</p></td>
                  <td><button onClick={() => handleDelete(goal.id)}>DELETE</button></td>
                </tr>
              </tbody>
              ))}
          </table>
    </div>
  );
};

export default PastGoalPage;


