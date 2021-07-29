import React from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              exact={true}
              className={`${this.props.pathname === "/" ? "active" : ""}`}
            >
              Women
            </NavLink>
          </li>
          <li><NavLink
              to="/men"
              className={`${this.props.pathname === "/men" ? "active" : ""}`}
            >
              Men
            </NavLink></li>
          <li>
          <NavLink
              to="/kids"
              className={`${this.props.pathname === "/kids" ? "active" : ""}`}
            >
              Kids
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
