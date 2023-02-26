import React, {useState} from "react";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUpPageFounder.module.css";

const SignUpPageFounder = () => {
  const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "", name: "", phone: "", password: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { username, name, phone, password  } = user;

        const res = await fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username, name, phone, password
            })
        });

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration"); 
            console.log("Invalid Registration");
        } else {
            window.alert(" Registration Successful"); 
            console.log("Successful Registration");
            navigate("/founderform");
        }
    }

  const onLogInClick = useCallback(() => {
    navigate("/login-page-founder");
  }, [navigate]);


  return (
    <div className={styles.signUpPageFounder}>
      <img className={styles.vectorIcon} alt="" />
      <img className={styles.google1Icon} alt="" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="../group-26.svg" />
        <div className={styles.or}>-OR-</div>
        {/* <button className={styles.signUpWith} >Sign up with google</button> */}
        <a className="btn btn-block btn-social btn-google" href="http://localhost:8000/auth/google" role="button">
        <i className="fab fa-google"></i>
        Sign Up with Google
      </a>
      <a className="btn btn-block btn-social btn-google" href="http://localhost:8000/auth/google" role="button">
        <i className="fab fa-google"></i>
        Sign Up with Google
      </a>
      <a class="btn btn-block btn-social btn-google" href="/auth/linkedin" role="button">
        <i class="fab fa-google"></i>
        Sign Up with LinkedIn
      </a>
        <input
          className={styles.emailAddress}
          type="email"
          placeholder="Email Address"
          name="username"
          value={user.username}
          onChange={handleInputs}
        />
        <input
          className={styles.fullName}
          type="text"
          placeholder="Full Name"
          name="name"
          value={user.name}
          onChange={handleInputs}
        />
        <input
          className={styles.phoneNo}
          type="number"
          placeholder="Phone no."
          name="phone"
          value={user.phone}
          onChange={handleInputs}
        />
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleInputs}
        />
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <Link
          className={styles.logIn}
          to="/login-page-investor"
          onClick={onLogInClick}
        >
          <span>{` `}</span>
          <span className={styles.logIn1}>Log in</span>
        </Link>
        <b className={styles.createAccount}>Create Account</b>
        <div className={styles.frameInner} />
        <button
          className={styles.rectangleButton}
          onClick={PostData}
          name="submit"
        />
        <label className={styles.checkboxLabel}>
        <input type="checkbox" className={styles.checkboxInput}/>
        terms and conditions apply
        </label>
        <img className={styles.lineIcon} alt="" src="../line-10.svg" />
        <img className={styles.frameChild1} alt="" src="../line-10.svg" />
        <img className={styles.frameChild2} alt="" src="../line-10.svg" />
        <img className={styles.frameChild3} alt="" src="../line-10.svg" />
        <div className={styles.createAccount1}>Create Account</div>
        <img className={styles.google2Icon} alt="" src="../google-2.svg" />
      </div>
    </div>
  );
};

export default SignUpPageFounder;
