import styles from "./VideoDescriptionMenu.module.css";

const VideoDescriptionMenu = () => {
  return (
    <div className={styles.startupsNameParent}>
      <div className={styles.startupsName}>{`Startup’s name  `}</div>
      <div className={styles.instanceParent}>
        <div className={styles.frameParent}>
          <div className={styles.descriptionParent}>
            <div className={styles.description}>Description</div>
            <img
              className={styles.arrowDownCircleIcon}
              alt=""
              src="../arrowdowncircle@2x.png"
            />
          </div>
          <img className={styles.instanceChild} alt="" src="../line-14.svg" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.descriptionParent}>
            <div className={styles.description}>Founder’s ask</div>
            <img
              className={styles.arrowDownCircleIcon}
              alt=""
              src="../arrowdowncircle@2x.png"
            />
          </div>
          <img className={styles.instanceChild} alt="" src="../line-141.svg" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.descriptionParent}>
            <div className={styles.description}>About the founder</div>
            <img
              className={styles.arrowDownCircleIcon}
              alt=""
              src="../arrowdowncircle@2x.png"
            />
          </div>
          <img className={styles.instanceChild} alt="" src="../line-142.svg" />
        </div>
      </div>
    </div>
  );
};

export default VideoDescriptionMenu;
