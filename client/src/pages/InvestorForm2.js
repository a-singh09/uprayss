import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorForm2.module.css";

const InvestorForm2 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/login-page-investor");
  }, [navigate]);

  const onMacBookPro1431Click = useCallback(() => {
    navigate("/investorform");
  }, [navigate]);

  return (
    <div className={styles.investorForm2}>
      <div className={styles.investorForm2Child} />
      <b className={styles.aboutYou}>About you</b>
      <div className={styles.rectangleParent}>
        <input className={styles.instanceChild} type="text" />
        <div className={styles.areYouInvesting}>
          Are you investing for the first time?
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <input className={styles.instanceChild} type="text" />
        <div className={styles.areYouInvesting}>Country you live in?</div>
      </div>
      <div className={styles.rectangleContainer}>
        <input className={styles.instanceChild} type="text" />
        <div className={styles.areYouInvesting}>
          You live in teir1/teir2/teir3 city?
        </div>
      </div>
      <div className={styles.frameDiv}>
        <input className={styles.instanceChild} type="text" />
        <div className={styles.areYouInvesting}>Your annual income?</div>
      </div>
      <div className={styles.rectangleParent1}>
        <button
          className={styles.frameChild}
          onClick={onRectangleButtonClick}
        />
        <div className={styles.submit}>Submit</div>
      </div>
      <div className={styles.rectangleParent2}>
        <input className={styles.instanceChild} type="text" />
        <div className={styles.areYouInvesting}>PAN No.</div>
      </div>
      <div className={styles.rectangleParent3}>
        <input className={styles.instanceChild} type="text" />
        <div className={styles.areYouInvesting}>Investment Domain</div>
      </div>
      <div className={styles.macbookPro1431} onClick={onMacBookPro1431Click}>
        <div className={styles.rectangleParent4}>
          <div className={styles.frameItem} />
          <div className={styles.edTechParent}>
            <a className={styles.edTech}>Ed-tech</a>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.edTechGroup}>
            <a className={styles.edTech}>Fin-tech</a>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.edTechContainer}>
            <a className={styles.edTech}>{`  D to C `}</a>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.edTechParent1}>
            <a className={styles.edTech}> B to B</a>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.edTechParent2}>
            <a className={styles.edTech}> Food</a>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.edTechParent3}>
            <a className={styles.edTech}> E-com</a>
            <div className={styles.rectangleDiv} />
          </div>
        </div>
        <b className={styles.chooseYourInvestment}>
          Choose your investment domain
        </b>
      </div>
      <nav className={styles.navBar}>
        <div className={styles.uprayss}>UpRayss</div>
        <a className={styles.faq}>FAQ</a>
        <a className={styles.home}>{`Home `}</a>
        <a className={styles.contactUs}>Contact us</a>
      </nav>
    </div>
  );
};

export default InvestorForm2;
