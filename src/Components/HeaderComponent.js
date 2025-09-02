import { useState } from "react";
import { Header_Logo } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
const isOnline = useOnlineStatus();
  return(
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src={Header_Logo}
        alt="logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Online: {isOnline ? "🟢" : "🔴" }</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
         <li><Link to="/Grocery">Grocery</Link></li>
        <button
          className="login-btn"
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}> {loginBtn} </button>
      </ul>
    </div>
  </div>
)};

export default HeaderComponent;