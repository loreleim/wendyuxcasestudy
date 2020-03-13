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
          <div className={style.sectionContainer}>
            <div className={style.textContainer}>
              <h2>A narrative walking simulator</h2>
              <p>
                Wendy Goes Hiking is a narrative walking simulator that
                transforms into a survival horror experience as the Player
                enters a Wendigo’s territory while on a hike in a national park.
              </p>
            </div>
        </section>
      </div>
    );
  }
}

export default Home;
