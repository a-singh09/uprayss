import styles from "./VideoPlayerComponent.module.css";

const VideoPlayerComponent = () => {
  return (
    <video className={styles.wrapper} controls>
      <source />
    </video>
  );
};

export default VideoPlayerComponent;
