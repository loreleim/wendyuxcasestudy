import React from "react";
import style from "../download-game/index.module.scss";

class DownloadButton extends React.Component {
  render() {
    return (
      <button
        className={style.downloadContainer}
        onClick={event => {
          event.preventDefault();
          window.open(
            "https://github.com/hodge47/WendyGoesHiking/releases/tag/v0.1"
          );
        }}
      >
        Download
      </button>
    );
  }
}

export default DownloadButton;
