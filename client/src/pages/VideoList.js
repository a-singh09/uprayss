import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import VideoStack from "../components/VideoStack";
import NavBar from "../components/NavBar";
import styles from "./VideoList.module.css";

const VideoList = () => {
  const navigate = useNavigate();

  const onVideoClick = useCallback(() => {
    navigate("/videoplayer");
  }, [navigate]);

  const onVideo1Click = useCallback(() => {
    navigate("/videoplayer");
  }, [navigate]);

  const onVideo2Click = useCallback(() => {
    navigate("/videoplayer");
  }, [navigate]);

  const onVideo3Click = useCallback(() => {
    navigate("/videoplayer");
  }, [navigate]);

  const onVideo4Click = useCallback(() => {
    navigate("/videoplayer");
  }, [navigate]);

  return (
    <div className={styles.videoList}>
      <div className={styles.hereAreThe}>
        Here are the recent pitches for you
      </div>
      <b className={styles.welcomePriyanshu}>Welcome Priyanshu,</b>
      <VideoStack
        onVideoClick={onVideoClick}
        rectangle21="../rectangle-21@2x.png"
      />
      <VideoStack
        onVideoClick={onVideo1Click}
        videoTop="66.31rem"
        rectangle21="../rectangle-211@2x.png"
      />
      <VideoStack
        onVideoClick={onVideo2Click}
        videoTop="99.94rem"
        rectangle21="../rectangle-212@2x.png"
      />
      <VideoStack
        onVideoClick={onVideo3Click}
        videoTop="133.56rem"
        rectangle21="../rectangle-213@2x.png"
      />
      <VideoStack
        onVideoClick={onVideo4Click}
        videoTop="167.19rem"
        rectangle21="../rectangle-214@2x.png"
      />
      <NavBar />
    </div>
  );
};

export default VideoList;
