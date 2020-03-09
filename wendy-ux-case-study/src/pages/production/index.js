import React from "react";
import style from "./index.module.scss";

class Production extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.heroContainer}>
          <h1>Production</h1>
          <p>coming soon</p>
        </section>
      </div>
    );
  }
}

export default Production;
