import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="hp_hdr">HOME PAGE</h1>
      <div className="hp_welcome">
        <h2>Welcome your personal goal tracker</h2>
        <p>
          Golee is a tool to help you record your goals,
          and any influence that could be helping you achieve those goals. 
          With this tool you can add any goal, set their influence, 
          and easily visualize those results over time.
        </p>
      </div>
      <div className="hp_nav">
        <h3 className="hp_nav_hdr">Login or Register to Begin...</h3>
        <button onClick={() => navigate("/login")} >Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default HomePage;
