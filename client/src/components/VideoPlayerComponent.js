import React, { useState, useEffect } from "react";
import styles from "./VideoPlayerComponent.module.css";

const VideoPlayerComponent = ({ media }) => {
  const [currentMedia, setCurrentMedia] = useState([]);

  useEffect(() => {
    if (media && media.length > 0) {
      setCurrentMedia(media[0]);
    }
  }, [media]);

  return (
    <div className={styles.wrapper}>
      {currentMedia && (
        <video controls src={currentMedia.url}>
          <source type={currentMedia.type} />
        </video>
      )}
    </div>
  );
};

export default VideoPlayerComponent;

