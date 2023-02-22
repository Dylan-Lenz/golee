import React from "react";
import { useNavigate } from "react-router-dom";
import '../HomePage/HomePage.css';

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="hp">
      <h1 className="hp_hdr">HOME PAGE</h1>
      <div className="hp_content">
        <h2 className="hp_h2">Welcome Your Personal Goal Tracker</h2>
        <h4 className="hp_p">
          Golee is a tool to help you record your goals,
          and any influence that could be helping you achieve those goals. 
          With this tool you can add any goal, set their influence, 
          and easily record those results over time.
        </h4>
        <div className="hp_nav">
          <div >
            <h3 className="hp_nav_hdr">Login or Register to Begin...</h3>
          </div>
          <div className="hp_nav_b">
            <button onClick={() => navigate("/login")} >Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
