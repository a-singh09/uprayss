import React from 'react'
import { useMemo } from "react";
import styles from "./VideoStack.module.css";

const VideoStack = ({ onVideoClick, videoTop, rectangle21,  }) => {
  const videoStyle = useMemo(() => {
    return {
      top: videoTop,
    };
  }, [videoTop]);

  return (
    <div className={styles.video} onClick={onVideoClick} style={videoStyle}>
      <div className={styles.videoChild} />
      <img className={styles.videoItem} alt="" src={rectangle21} />
      <img className={styles.path3785Icon} alt="" src="../path3785.svg" />
      <div className={styles.startupsName}>Startup’s name</div>
      <img className={styles.iconThumbUp} alt="" src="../-icon-thumb-up.svg" />
      <div className={styles.problemThatTheyContainer}>
        <p className={styles.problemThatThey}>Problem that they are solving</p>
        <p className={styles.inBrief}>in brief .</p>
      </div>
      <div className={styles.iconEyeWrapper}>
        <img className={styles.iconEye} alt="" src="../-icon-eye.svg" />
      </div>
      <div className={styles.div}>19456</div>
      <div className={styles.div1}>2341</div>
    </div>
  );
};

export default VideoStack;
