import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import '../PastGoalPage/PastGoalPage.css';

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
    <div className="wrapper">
      <h1 className="pgp_hdr">PAST GOALS</h1>
          <table className="pgp_tbl">
            <thead className="pgp_tbl_hd">
              <tr className="pgp_tbl_hd_tr">
                <th><h2>GOAL</h2></th>
                <th><h2>INFLUENCE</h2></th>
                <th><h2>TOTAL</h2></th>
                <th><h2>DELETE</h2></th>
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


