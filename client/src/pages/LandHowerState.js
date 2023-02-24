import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandHowerState.module.css";

const LandHowerState = () => {
  const navigate = useNavigate();

  const onRectangleButton2Click = useCallback(() => {
    navigate("/signup-page-founder");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/signup-page-investor");
  }, [navigate]);

  return (
    <div className={styles.landHowerState}>
      <div className={styles.macbookPro1426}>
        <img
          className={styles.macbookPro1426Child}
          alt=""
          src="../ellipse-3.svg"
        />
        <button className={styles.macbookPro1426Item} />
        <button className={styles.macbookPro1426Inner} />
        <b className={styles.founder}>Founder</b>
        <b className={styles.investor}>Investor</b>
        <div className={styles.joinUsAs}>Join us as an</div>
        <div className={styles.component1}>
          <b className={styles.raiseFundsInvestgrowContainer}>
            <p className={styles.raiseFunds}>Raise funds,</p>
            <p className={styles.raiseFunds}>Invest,grow,</p>
            <p className={styles.connect}>connect</p>
          </b>
          <div className={styles.easilyFasterEffectivelyWrapper}>
            <b className={styles.easilyFasterEffectivelyContainer}>
              <p className={styles.raiseFunds}>easily.</p>
              <p className={styles.raiseFunds}>faster.</p>
              <p className={styles.connect}>effectively.</p>
            </b>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.uprayssParent}>
            <div className={styles.uprayss}>UpRayss</div>
            <b className={styles.faq}>FAQ</b>
            <b className={styles.home}>{`Home `}</b>
            <b className={styles.contactUs}>Contact us</b>
          </div>
          <div className={styles.uprayssParent}>
            <div className={styles.uprayss}>UpRayss</div>
            <b className={styles.faq}>FAQ</b>
            <b className={styles.home}>{`Home `}</b>
            <b className={styles.contactUs}>Contact us</b>
          </div>
        </div>
      </div>
      <div className={styles.macbookPro1426}>
        <img
          className={styles.macbookPro1426Child}
          alt=""
          src="../ellipse-31.svg"
        />
        <button
          className={styles.macbookPro1426Item}
          onClick={onRectangleButton2Click}
        />
        <button
          className={styles.macbookPro1426Inner}
          onClick={onRectangleButton3Click}
        />
        <b className={styles.founder}>Founder</b>
        <b className={styles.investor}>Investor</b>
        <div className={styles.joinUsAs}>Join us as an</div>
        <div className={styles.component1}>
          <b className={styles.raiseFundsInvestgrowContainer}>
            <p className={styles.raiseFunds}>Raise funds,</p>
            <p className={styles.raiseFunds}>Invest,grow,</p>
            <p className={styles.connect}>connect</p>
          </b>
          <div className={styles.easilyFasterEffectivelyWrapper}>
            <b className={styles.easilyFasterEffectivelyContainer}>
              <p className={styles.raiseFunds}>easily.</p>
              <p className={styles.raiseFunds}>faster.</p>
              <p className={styles.connect}>effectively.</p>
            </b>
          </div>
        </div>
        <nav className={styles.uprayssParent}>
          <div className={styles.uprayssParent}>
            <div className={styles.uprayss2}>UpRayss</div>
            <b className={styles.faq2}>FAQ</b>
            <b className={styles.home2}>{`Home `}</b>
            <b className={styles.contactUs2}>Contact us</b>
          </div>
          <div className={styles.uprayssParent}>
            <div className={styles.uprayss2}>UpRayss</div>
            <a className={styles.faq3}>FAQ</a>
            <a className={styles.home3}>{`Home `}</a>
            <a className={styles.contactUs3}>Contact us</a>
          </div>
        </nav>
      </div>
      <div className={styles.macbookPro1428}>
        <b className={styles.whatDoWe}>What do we do ?</b>
        <b className={styles.ourWorkUpdates}>Our work updates</b>
        <div className={styles.macbookPro1428Child} />
        <div className={styles.macbookPro1428Item} />
        <div className={styles.macbookPro1428Inner} />
        <img className={styles.ellipseIcon} alt="" />
        <img className={styles.arrowIcon} alt="" />
        <div className={styles.rectangleDiv} />
        <b className={styles.noOfStartups}>No. of startups registered</b>
        <b className={styles.noOfInvestment}>No. of investment done</b>
        <div className={styles.macbookPro1428Child1} />
        <div className={styles.macbookPro1428Child2} />
        <div className={styles.parent}>
          <b className={styles.b}>2134</b>
          <b className={styles.b1}>
            <p className={styles.raiseFunds}>3</p>
            <p className={styles.raiseFunds}>4</p>
            <p className={styles.raiseFunds}>5</p>
            <p className={styles.raiseFunds}>6</p>
            <p className={styles.raiseFunds}>7</p>
            <p className={styles.raiseFunds}>8</p>
            <p className={styles.raiseFunds}>9</p>
          </b>
        </div>
        <div className={styles.group}>
          <b className={styles.b2}>734</b>
          <b className={styles.b3}>
            <p className={styles.raiseFunds}>2</p>
            <p className={styles.raiseFunds}>3</p>
            <p className={styles.raiseFunds}>4</p>
            <p className={styles.raiseFunds}>5</p>
            <p className={styles.raiseFunds}>6</p>
            <p className={styles.connect}>7</p>
          </b>
        </div>
        <div className={styles.component2}>
          <div className={styles.component2Child} />
          <div className={styles.component2Item} />
          <div className={styles.component2Inner} />
          <div className={styles.component2Child1} />
          <div className={styles.component2Child2} />
          <i className={styles.helpsStartupsToContainer}>
            <p className={styles.raiseFunds}>“Helps</p>
            <p className={styles.raiseFunds}>startups</p>
            <p className={styles.connect}>to raise funding”</p>
          </i>
          <div className={styles.component2Child3} />
          <i className={styles.helpsAnyoneToContainer}>
            <p className={styles.raiseFunds}>“Helps</p>
            <p className={styles.raiseFunds}>anyone</p>
            <p className={styles.raiseFunds}>{`to invest in `}</p>
            <p className={styles.connect}>startups”</p>
          </i>
          <div className={styles.component2Child4} />
          <div className={styles.component2Child5} />
          <i className={styles.connectFoundersToContainer}>
            <p className={styles.raiseFunds}>“Connect founders</p>
            <p className={styles.raiseFunds}>{`to `}</p>
            <p className={styles.connect}>investors”</p>
          </i>
          <i className={styles.helpsFoundersToContainer}>
            <p className={styles.raiseFunds}>“Helps</p>
            <p className={styles.raiseFunds}>founders</p>
            <p className={styles.raiseFunds}>{`to get `}</p>
            <p className={styles.raiseFunds}>reviews</p>
            <p className={styles.raiseFunds}>on their</p>
            <p className={styles.connect}>work ”</p>
          </i>
        </div>
      </div>
    </div>
  );
};

export default LandHowerState;
