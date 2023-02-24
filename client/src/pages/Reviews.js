import { useCallback } from "react";
import ReviewsComponent from "../components/ReviewsComponent";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const navigate = useNavigate();

  const onGroup8CopyClick = useCallback(() => {
    navigate("/videoplayer");
  }, [navigate]);

  return (
    <div className={styles.reviews}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <ReviewsComponent />
          <img className={styles.ovalIcon} alt="" src="../oval@2x.png" />
          <div className={styles.maxblagun}>maxblagun</div>
          <div className={styles.weeksAgo}>2 weeks ago</div>
          <div className={styles.woahYourProject}>
            Woah, your project looks awesome! How long have you been coding for?
            I’m still new, but think I want to dive into React as well soon.
            Perhaps you can give me an insight on where I can learn React?
            Thanks!
          </div>
        </div>
        <div className={styles.group7Copy3}>
          <ReviewsComponent />
          <img className={styles.ovalIcon} alt="" src="../oval1@2x.png" />
          <div className={styles.maxblagun}>amyrobson</div>
          <div className={styles.monthAgo}>1 month ago</div>
          <div className={styles.group7Copy3Child} />
          <div className={styles.woahYourProject}>
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You’ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </div>
        </div>
        <div className={styles.group7CopyParent}>
          <div className={styles.group7Copy}>
            <ReviewsComponent />
            <img className={styles.ovalIcon2} alt="" src="../oval2@2x.png" />
            <div className={styles.ramsesmiron}>ramsesmiron</div>
            <div className={styles.weekAgo}>1 week ago</div>
            <div className={styles.group7CopyChild} />
            <div className={styles.maxblagunIfYoure}>
              {" "}
              If you’re still new, I’d recommend focusing on the fundamentals of
              HTML, CSS, and JS before considering React. It’s very tempting to
              jump ahead but lay a solid foundation first.
            </div>
          </div>
          <div className={styles.group7Copy2}>
            <ReviewsComponent />
            <div className={styles.group7Copy2Child} />
            <img className={styles.ovalIcon3} alt="" src="../oval3@2x.png" />
            <div className={styles.juliusomoWrapper}>
              <div className={styles.juliusomo}>juliusomo</div>
            </div>
            <div className={styles.daysAgo}>2 days ago</div>
            <div className={styles.group7Copy2Item} />
            <div className={styles.ramsesmironICould}>
              I couldn’t agree more with this. Everything moves so fast and it
              always seems like everyone knows the newest library/framework. But
              the fundamentals are what stay constant.
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangle} />
          <img className={styles.ovalIcon4} alt="" src="../oval4@2x.png" />
          <textarea
            className={styles.groupChild}
            placeholder="Add a comment…"
          />
          <button className={styles.group8Copy} onClick={onGroup8CopyClick}>
            <div className={styles.rectangleCopy} />
            <div className={styles.send}>SEND</div>
          </button>
        </div>
      </div>
      <b className={styles.reviews1}>Reviews</b>
      <NavBar
        fAQTextDecoration="unset"
        fAQFontWeight="bold"
        homeTextDecoration="unset"
        homeFontWeight="bold"
        contactUsTextDecoration="unset"
        contactUsFontWeight="bold"
      />
    </div>
  );
};

export default Reviews;
