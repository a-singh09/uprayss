import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./InvestorForm.module.css";

const InvestorForm = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/login-page-investor");
  }, [navigate]);

  return (
    <div className={styles.investorForm}>
      <div className={styles.investorFormChild} />
      <b className={styles.aboutYou}>About you</b>
      <div className={styles.rectangleParent}>
        {/* <input className={styles.instanceChild} type="text" name="experience" /> */}

        <select className={styles.instanceChild} type="text" name="experience" >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div className={styles.areYouInvesting}>
          Are you investing for the first time?
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <input className={styles.instanceChild} type="text" name="country" />
        <div className={styles.areYouInvesting}>Country you live in?</div>
      </div>
      <div className={styles.rectangleContainer}>
        <select className={styles.instanceChild} type="text" name="tier" > 
          <option value="1">Tier 1</option>
          <option value="2">Tier 2</option>
          <option value="3">Tier 3</option>
          <option value="4">Tier 4</option>
        </select>
        <div className={styles.areYouInvesting}>
          You live in teir1/teir2/teir3 city?
        </div>
      </div>
      <div className={styles.frameDiv}>
        <input className={styles.instanceChild} type="number" name="income" />
        <div className={styles.areYouInvesting}>Your annual income?</div>
      </div>
      <div className={styles.rectangleParent1}>
        <button
          className={styles.frameChild}
          onClick={onRectangleButtonClick}
          name="submit"
        />
        <div className={styles.submit}>Submit</div>
      </div>
      <div className={styles.rectangleParent2}>
        <input className={styles.instanceChild} type="number" />
        <div className={styles.areYouInvesting}>PAN No.</div>
      </div>
      <div className={styles.rectangleParent3}>
        <select className={styles.instanceChild} type="text" > 
        <option value="technology">technology</option>
          <option value="food">food</option>
          <option value="finance">finance</option>
          <option value="agriculture">agriculture</option>
        </select>
        <div className={styles.areYouInvesting}>Investment Domain</div>
      </div>
      <NavBar />
    </div>
  );
};

export default InvestorForm;
