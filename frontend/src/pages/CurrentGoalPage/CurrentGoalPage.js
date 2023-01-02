import React from "react";
import Chart from "../../components/Chart/Chart";
import Timer from "../../components/Timer/Timer";


const CurrentGoalPage = () => {
  
  return (
    <div >
      <h1>CURRENT GOAL</h1>
      <ul className="chartTime">
          <li>
            <Chart />
          </li>
          <li>
            <Timer />
          </li>
        </ul>
    </div>
  );
};

export default CurrentGoalPage;