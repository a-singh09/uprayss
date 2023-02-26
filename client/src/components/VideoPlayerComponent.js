import React, { useState, useEffect } from "react";
import styles from "./VideoPlayerComponent.module.css";

const VideoPlayerComponent = () => {
  // const [media, setMedia] = useState([]);

  // useEffect(() => {
  //   const fetchMedia = async () => {
  //     try {
  //       const response = await fetch("/api/v1/media/all");
  //       const data = await response.json();
  //       setMedia(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchMedia();
  // }, []);

  // const [currentMedia, setCurrentMedia] = useState([]);

  // useEffect(() => {
  //   if (media && media.length > 0) {
  //     setCurrentMedia(media[0]);
  //   }
  // }, [media]);

  return (
    <div className={styles.wrapper}>
      {/* {currentMedia && (
        <video controls src={currentMedia.url}>
          <source type={currentMedia.type} />
        </video>
      )} */}
      <video className={styles.wrapper} controls >
        <source src="../videos/1677360303483test.mp4" type="video/mp4"/>
      </video>

    </div>
  );
};

export default VideoPlayerComponent;
