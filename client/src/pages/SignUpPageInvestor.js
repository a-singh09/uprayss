import React from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUpPageInvestor.module.css";

const SignUpPageInvestor = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/investorform");
  }, [navigate]);

  return (
    <div className={styles.signUpPageInvestor}>
      <img className={styles.vectorIcon} alt="" />
      <img className={styles.google1Icon} alt="" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="../group-26.svg" />
        <div className={styles.or}>-OR-</div>
        <div className={styles.signUpWith}>Sign up with google</div>
        <input
          className={styles.fullName}
          type="text"
          placeholder="Full Name"
          name="name"
        />
        <input
          className={styles.emailAddress}
          type="email"
          placeholder="Email Address"
          name="email"
        />
        <input
          className={styles.phoneNo}
          type="number"
          placeholder="Phone no."
          name="phone"
        />
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          name="password"
        />
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <Link className={styles.logIn} to="/login-page-investor">
          <span>{` `}</span>
          <span className={styles.logIn1}>Log in</span>
        </Link>
        <b className={styles.createAccount}>Create Account</b>
        <div className={styles.frameInner} />
        <button
          className={styles.rectangleButton}
          onClick={onRectangleButtonClick}
          name="submit"
        />
        <img className={styles.lineIcon} alt="" src="../line-10.svg" />
        <img className={styles.frameChild1} alt="" src="../line-10.svg" />
        <img className={styles.frameChild2} alt="" src="../line-10.svg" />
        <img className={styles.frameChild3} alt="" src="../line-10.svg" />
        <div className={styles.createAccount1}>Create Account</div>
        <img className={styles.google2Icon} alt="" src="../google-21.svg" />
      </div>
    </div>
  );
};

export default SignUpPageInvestor;
