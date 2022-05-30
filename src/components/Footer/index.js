import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer({ data }) {
  return (
    <footer>
      {data.map((item, index) => {
        return (
          <Link className="footer-item" to={item.path} key={index}>
            {item.title}
          </Link>
        );
      })}
    </footer>
  );
}

export default Footer;
