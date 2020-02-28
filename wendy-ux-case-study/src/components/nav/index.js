import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import style from "../nav/index.module.scss";

export default class Nav extends PureComponent {
  render() {
    return (
      <header>
        <nav className={style.mainNav}>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/planning"}>Planning</Link>
            </li>
            <li>
              <Link to={"/production"}>Production</Link>
            </li>
            <li>
              <Link to={"usertesting"}>User Testing</Link>
            </li>
            <li>
              <Link to={"launch"}>Launch</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
