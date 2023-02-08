import React, { useState, useEffect } from 'react';
import RenderChart from "../../components/Chart/Chart";
import Timer from "../../components/Timer/Timer";
import '../CurrentGoalPage/CurrentGoalPage.css';
import GoalForm from '../../components/GoalForm/GoalForm';


const CurrentGoalPage = () => {

  
  return (
    <div className='gp_cont'>
      <h1 className='gp_hdr'>CURRENT GOAL</h1>
        <ul className='gp_frm_tmr'>
          <li >
            <div className='gp_frm'>
              <GoalForm/>
            </div>
            <div className='gp_tmr'>
              <Timer/>
            </div>
          </li>
          <li className='gp_chrt'>
            <RenderChart />
          </li>
        </ul>
    </div>
  );
}; 

export default CurrentGoalPage;