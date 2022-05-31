import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/images/logosite.png"
import Button from "../Button";

function Header({ data }) {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo"/>
      </Link>
      <nav className="nav">
        {data.map((item, index) => {
          return (
            <Link className="header-item" to={item.path} key={index}>
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="search">
        <input type="text" placeholder="Tìm kiếm sản phẩm"/>
        <Button text="Search"/>
      </div>
    </header>
  );
}

export default Header;
