import React from "react";
import RenderChart from "../../components/Chart/Chart";
// import RenderChart from "../../components/Chart/ChartV2.jsx";
import Timer from "../../components/Timer/Timer";
import '../CurrentGoalPage/CurrentGoalPage.css';
import GoalForm from '../../components/GoalForm/GoalForm';


const CurrentGoalPage = () => {
  
  return (
    <div className='container'>
      <h1 className='goalPage-hdr'>CURRENT GOAL</h1>
        <ul>
          <li className='goalPage-li-tmr'>
            <Timer/>
          </li>
          <li className='goalPage-d-chrt'>
            <RenderChart />
          </li>
          <li className='goalPage-li-frm'>
            <GoalForm/>
          </li>
        </ul>
    </div>
  );
};

export default CurrentGoalPage;