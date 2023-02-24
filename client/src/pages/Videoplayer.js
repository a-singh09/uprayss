import { useCallback } from "react";
import VideoPlayerComponent from "../components/VideoPlayerComponent";
import { useNavigate } from "react-router-dom";
import VideoDescriptionMenu from "../components/VideoDescriptionMenu";
import styles from "./Videoplayer.module.css";

const Videoplayer = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/reviews");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/reviews");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/videolist");
  }, [navigate]);

  return (
    <div className={styles.videoplayer}>
      <VideoPlayerComponent />
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <button className={styles.frameChild} />
          <div className={styles.connectWithThe}>Connect with the founder</div>
        </div>
        <div className={styles.rectangleGroup} onClick={onFrameContainer2Click}>
          <button
            className={styles.frameChild}
            onClick={onRectangleButton1Click}
          />
          <div className={styles.reviews}>Reviews</div>
        </div>
        <button
          className={styles.rectangleContainer}
          onClick={onFrameButtonClick}
        >
          <div className={styles.frameInner} />
          <div className={styles.nextPitch}>Next Pitch</div>
        </button>
        <VideoDescriptionMenu />
      </div>
      <nav className={styles.navBar}>
        <div className={styles.uprayss}>UpRayss</div>
        <b className={styles.faq}>FAQ</b>
        <b className={styles.home}>{`Home `}</b>
        <b className={styles.contactUs}>Contact us</b>
      </nav>
    </div>
  );
};

export default Videoplayer;
