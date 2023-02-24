import VideoDescription from "../components/VideoDescription";
import ReviewArea from "../components/ReviewArea";
import NavBar from "../components/NavBar";
import styles from "./Videoreview.module.css";

const Videoreview = () => {
  return (
    <div className={styles.videoreview}>
      <div className={styles.videoreviewChild} />
      <VideoDescription />
      <div className={styles.description}>Description</div>
      <div className={styles.startupsName}>Startup’s name</div>
      <div className={styles.rectangleParent}>
        <button className={styles.frameChild} />
        <div className={styles.connectWithThe}>Connect with the founder</div>
      </div>
      <button className={styles.videoreviewItem} />
      <ReviewArea />
      <div className={styles.writeAReview}>Write a review</div>
      <button className={styles.connectWithTheFounderParent}>
        <div className={styles.connectWithThe1}>Connect with the founder</div>
        <div className={styles.frameItem} />
        <div className={styles.nextPitch}>Next Pitch</div>
      </button>
      <div className={styles.done}>Done</div>
      <div className={styles.videoreviewInner} />
      <div className={styles.thankYouForContainer}>
        <p className={styles.thankYouFor}>Thank you for</p>
        <p className={styles.thankYouFor}>{`your precious `}</p>
        <p className={styles.review}>review!</p>
      </div>
      <NavBar />
    </div>
  );
};

export default Videoreview;
