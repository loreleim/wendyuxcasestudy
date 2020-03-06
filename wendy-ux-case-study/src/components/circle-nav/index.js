import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import style from "../circle-nav/index.module.scss";

export default class CircleNav extends PureComponent {
  render() {
    return (
      <header>
        <nav className={style.mainNav}>
          <div className={style.outerCircle}>
            <div className={style.innerCircle}></div>
          </div>
        </nav>
      </header>
    );
  }
}
