import React from "react";
import style from "./index.module.scss";
import DownloadButton from "../../components/download-game";

class Home extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.heroContainer}>
          <div className={style.mainTitleContainer}></div>
          <DownloadButton></DownloadButton>
        </section>
        <section>
          <div className={style.sectionContainer}></div>
        </section>
      </div>
    );
  }
}

export default Home;
