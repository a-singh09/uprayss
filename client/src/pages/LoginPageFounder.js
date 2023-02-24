import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPageFounder.module.css";

const LoginPageFounder = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/videolist");
  }, [navigate]);

  return (
    <div className={styles.loginPageFounder}>
      <img className={styles.vectorIcon} alt="" />
      <img className={styles.google1Icon} alt="" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="../group-26.svg" />
        <input
          className={styles.emailAddress}
          type="email"
          placeholder="Email Address"
          name="email"
        />
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          name="password"
        />
        <b className={styles.logIn}>Log in</b>
        <button
          className={styles.frameInner}
          onClick={onRectangleButtonClick}
          name="submit"
        />
        <img className={styles.lineIcon} alt="" src="../line-10.svg" />
        <img className={styles.frameChild1} alt="" src="../line-10.svg" />
        <div className={styles.logIn1}>Log in</div>
      </div>
    </div>
  );
};

export default LoginPageFounder;
