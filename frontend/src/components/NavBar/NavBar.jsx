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
        <li className="navButtons">
          {user ? (
            <li>
              <Link to="/" > <b>HOME</b> </Link>
              <Link to="/current" > <b>CURRENT</b> </Link>
              <Link to="/add" > <b>ADD</b> </Link>
              <Link to="/past" > <b>PAST</b> </Link>
            </li>
          ) : (
            <li>
              <Link to="/" > <b>HOME</b> </Link>
            </li>
          )}
        </li>
        <li className="navHeader">
          <h1>
          <Link to="/" > <b>golee</b> </Link>
          </h1>
        </li>
        <li className="navUsers">
          {user ? (
            <p>{user.username}</p>
          ) : (
            <button onClick={() => navigate("/register")}>Register</button>
          )}
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

      