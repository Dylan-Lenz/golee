import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import './GoalForm.css'

const GoalForm = () => {
    const [user, token] = useAuth();
    const [influence, setInfluence] = useState("");
    const [goalName, setGoalName] = useState("");
    const [goal, setGoal] = useState("");

    const postGoal = async (goal) => {
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/api/user/goals/",
                goal,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            setGoal(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e) => {
        let newGoal = {
            goal_name: goalName,
            influence_name: influence,
            influence_value: "0",
            user_id: user.id,
        };
        postGoal(newGoal);
    };
 
    return (
    <div className="container">
        <Form onSubmit={(e) => handleSubmit(e)}>
            <h3 className="setgoal-title">ADD A GOAL</h3>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={goalName}
                    onChange={(e) => setGoalName(e.target.value)}
                    placeholder="Goal"
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={influence}
                    onChange={(e) => setInfluence(e.target.value)}
                    placeholder="Influence"
                />
            </Form.Group>
            <Button variant="info" type="submit">
                Set Goal
            </Button>
        </Form>
    </div>
    );
};

export default GoalForm;
