import React from "react";
import Logo from "../../Assets/logoicts.png";

import "./styles.css";

const Footer = () => {
    return (

        <div className="rodape">
            <img src={Logo} alt="Logo do ICTS" />
        <p className="developer"> 2021 | Site desenvolvido por <a className="autora" href="https://github.com/jumara-pimenta" target="_blank" rel="noreferrer">Jumara Pimenta</a></p>
      </div>

    );
};

export default Footer;