import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer({ store, support , about }) {
  return (
    <footer className="wrapper">
      <div className="store">
        <h2> Store </h2>
        <ul>
          {store.map((item,index) => {
            return (
              <li>
                {item.title}
              </li>
            )}
          )}
        </ul>
      </div>
      <div className="support">
        <h2> Support </h2>
        <ul>
          {support.map((item, index) => {
            return (
              <li>
                <Link className="footer-item" to={item.path} key={index}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="about">
        <h2> Support </h2>
        <ul>
          {about.map((item, index) => {
            return (
              <li>
                <Link className="footer-item" to={item.path} key={index}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
