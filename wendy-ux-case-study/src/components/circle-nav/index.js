import React, { PureComponent } from "react";
import style from "../circle-nav/index.module.scss";

export default class CircleNav extends PureComponent {
  render() {
    return (
      <header>
        <nav className={style.mainNav} onClick={this.props.drawerClickHandler}>
          <div className={style.outerCircle}>
            <div className={style.innerCircle}>
              <span className={style.hamLineOne}></span>
              <span className={style.hamLineTwo}></span>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
