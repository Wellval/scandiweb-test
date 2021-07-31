import React from "react";
import { NavLink } from "react-router-dom";
import { consumerType } from '../../constants';

export class Navbar extends React.Component {
    render() {

        return (
            <nav>
                <ul className="nav-list">
                    {consumerType.map(x =>
                        <li key={x}>
                            <NavLink
                                to={"/clothes/" + x}
                                className={this.props.pathname === "/clothes/" + x ? "active" : null}
                            >
                                {x}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}
