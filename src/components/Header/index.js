import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header({ data }) {
  return (
    <header>
      {data.map((item, index) => {
        return (
          <Link className="header-item" to={item.path} key={index}>
            {item.title}
          </Link>
        );
      })}
    </header>
  );
}

export default Header;
