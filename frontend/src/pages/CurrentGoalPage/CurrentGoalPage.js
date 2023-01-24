import React from "react";
import RenderChart from "../../components/Chart/Chart";
// import RenderChart from "../../components/Chart/ChartV2.jsx";
import Timer from "../../components/Timer/Timer";


const CurrentGoalPage = () => {
  
  return (
    <div >
      <h1>CURRENT GOAL</h1>
      <ul className="chartTime">
          <li>
            <RenderChart />
          </li>
          <li>
            <Timer />
          </li>
        </ul>
    </div>
  );
};

export default CurrentGoalPage;