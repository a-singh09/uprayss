import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./FounderForm.module.css";

const FounderForm = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/login-page-founder");
  }, [navigate]);

  return (
    <div className={styles.founderForm}>
      <div className={styles.founderFormChild} />
      <b className={styles.letUsHelp}>Let us help you</b>
      <div className={styles.rectangleParent}>
        <input className={styles.instanceChild} type="text" name="startupname"/>
        <div className={styles.areYouInvesting}>Name of your startup</div>
      </div>
      
      <div className={styles.component4}>
        <div className={styles.whatProblemAre}>
          What problem are you solving?
        </div>
        <textarea className={styles.component4Child} type="text" name="problem"/>
      </div>
      <div className={styles.rectangleContainer}>
        <input className={styles.instanceChild} type="number" name="ask"/>
        <div className={styles.areYouInvesting}>Your ask?</div>
      </div>
      <div className={styles.component41}>
        <div className={styles.whatProblemAre}>Write about you?</div>
        <textarea className={styles.component4Child} type="text" name="about"/>
      </div>
      <div className={styles.component42}>
        <div className={styles.whatProblemAre}>Addtional information?</div>
        <textarea className={styles.component4Child} type="text" name="additionalinfo"/>
      </div>
      <div className={styles.frameDiv}>
        <input className={styles.instanceChild} type="number" name="panno"/>
        <div className={styles.areYouInvesting}>PAN No.</div>
      </div>
      <div className={styles.rectangleGroup}>
        <button
          className={styles.frameChild}
          onClick={onRectangleButtonClick}
          name="submit"
        />
        <div className={styles.submit}>Submit</div>
      </div>
      <NavBar />
    </div>
  );
};

export default FounderForm;
