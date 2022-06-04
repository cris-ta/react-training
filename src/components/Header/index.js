import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/store.png"
import "./style.css";
import {Input} from "../Input"
import Button from "../Button"

function Header({ data }) {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo"/>
      </Link>
      <ul className="nav">
        {data.map((item, index) => {
          return (
            <li>
              <Link className="header-item" to={item.path} key={index}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="search">
        <Input type="text" placeholder="Tìm kiếm sản phẩm"/>
        <Button text="Search"/>
      </div>
    </header>
  );
}

export default Header;
