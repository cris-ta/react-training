import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer({ info, support, contact }) {
  return (
    <footer className="footer">
      <div className="info">
        <span className="footer__title">Hộ kinh doanh Torano</span>
        <ul className="info__list">
          {info.map((item, index) => {
            return (
              <li className="footer-item">
                {item.title}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="support">
        <span className="footer__title">Hỗ trợ khách hàng</span>
        <ul className="support__list">
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
      <div className="contact">
      <span className="footer__title">Về chúng tôi</span>
        <ul className="contact__list">
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
    </footer>
  );
}

export default Footer;
