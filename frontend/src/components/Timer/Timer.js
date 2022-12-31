import React, { useState, useEffect } from 'react';


export default function Timer(){
   
  const [deadline, setDeadline] = useState("7 feb 2023 15:30:25");
  const [countdown, setCountdown]= useState(
    {
      days:'',
      hours:'',
      minutes:'',
      seconds:'',
    }
  );

  useEffect(() => {
    countdownTimer();
  }); 

  const countdownTimer=()=>{

    const timeInterval = setInterval(() => {
      
      const time = new Date(deadline).getTime(); 
      const currentTime = new Date().getTime();
      const remainingTime = time - currentTime;

      const totalDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const totalMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const totalSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
      const runningTime = {
        days: totalDays,
        hours: totalHours,
        minutes: totalMinutes,
        seconds: totalSeconds,
      }

      setCountdown(runningTime);
        if (remainingTime < 0) {
            clearInterval(timeInterval);
            setDeadline(false);
          }
    }, 1000);
  }
     
  return(
      <div>
          <h1>TIME</h1>
          <div>
            {deadline!==false ?
              <>
              <h2>Days</h2>
                <p>{countdown.days}</p>
              <h3>Hours</h3>
                <p>{countdown.hours}</p>
              <h4>Mins</h4>
                <p>{countdown.minutes}</p>
              <h5>Secs</h5>
                <p>{countdown.seconds}</p>
              </>
              : 
              <h1>TIME EXPIRED</h1>}
        </div>
      </div>
  )
}