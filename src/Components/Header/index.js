import React from "react";
import Img from "../../Assets/Logo.png";
import "./styles.css";

const Header = () => {
  return (
    <div className="main">
      <div>
      <img src={Img} alt="Logo do site" />
      </div>
      <div className="user">
        <p>Olá, Chico!</p>
      </div>
    </div>
  );
};

export default Header;