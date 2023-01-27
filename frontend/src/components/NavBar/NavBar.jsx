import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="navBar-li-nav">
          {user ? (
            <li>
              <button onClick={() => navigate("/")}>HOME</button>
              <button onClick={() => navigate("/current")}>CURRENT</button>
              <button onClick={() => navigate("/past")}>PAST</button>
            </li>
          ) : (
            <li>
              <button onClick={() => navigate("/")}>HOME</button>
            </li>
          )}
        </li>
        <li className="navBar-li-hdr">
          <h1>
            <Link to="/" > <a className="navBar-a-hdr" >golee</a> </Link>
          </h1>
        </li>
        <li>
          {user ? (
            <p className="navBar-p-log">{user.username}</p>
          ) : (
            <button onClick={() => navigate("/register")}>Register</button>
          )}
        </li>
        <li>
          {user ? (
            <button className="navBar-b-log" onClick={logoutUser}>Logout</button>
          ) : (
            <button className="navBar-b-log" onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

      