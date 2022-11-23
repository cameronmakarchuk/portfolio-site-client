import React from "react";
import "./PageHeader.scss";
import darkToggleIcon from "../../assets/icons/dark_mode_FILL0_wght400_GRAD0_opsz48.svg";
// import _lightToggleIcon from "../../assets/icons/light_mode_FILL0_wght400_GRAD0_opsz48.svg";
import { NavLink } from "react-router-dom";

export default function PageHeader(): JSX.Element {
  return (
    <header className="page-header">
      <nav className="page-header__nav">
        <ul className="page-header__nav-list">
          <NavLink to="" className="page-header__nav-link">
            <li className="page-header__nav-item">About</li>
          </NavLink>
          <NavLink to="" className="page-header__nav-link">
            <li className="page-header__nav-item">Projects</li>
          </NavLink>
          <NavLink to="" className="page-header__nav-link">
            <li className="page-header__nav-item">Contact</li>
          </NavLink>
        </ul>
      </nav>
      <img
        src={darkToggleIcon}
        alt="light dark toggle"
        className="page-header__light-dark-toggle"
      />
    </header>
  );
}
