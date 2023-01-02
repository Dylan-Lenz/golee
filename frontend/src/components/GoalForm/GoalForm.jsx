import React from "react";
import { useEffect, useState } from "react";
import {Button, Form} from 'react-bootstrap';
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const GoalForm = () => {
  const [user, token] = useAuth();
  const [influence, setInfluence] = useState ('');
  const [goal, setGoal] = useState(['']);

  function handleSubmit() {
 
    let newGoal = {
        goal_name: goal,
        influence_name: influence,
        influence_value: '0',
        user_id: [user.id],
      };
      setGoal(newGoal);
}

useEffect(() => {
  postGoal(goal);
}, [token]);

const postGoal = async (goal) => {
  try {
    let response = await axios.post("http://127.0.0.1:8000/api/user/goals/", goal, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    postGoal(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
  
  return ( 
    <Form onSubmit={handleSubmit}>
        <Form.Label>Add a Goal!</Form.Label>
        <Form.Group>
          <Form.Control type="text" value={goal} onChange={(e)=>setGoal(e.target.v)} placeholder="Goal"/>  
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" value={influence} onChange={(e)=>setInfluence(e.target.v)} placeholder="Influence"/>
        </Form.Group>
        <Button variant="info" type='submit'>Submit</Button>
    </Form>
  );
};

export default GoalForm;