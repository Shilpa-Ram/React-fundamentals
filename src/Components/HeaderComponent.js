import { Header_Logo } from "../utils/constants";

const HeaderComponent = () => (
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
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default HeaderComponent;