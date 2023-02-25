import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPageInvestor.module.css";

const LoginPageInvestor = () => {
  const navigate = useNavigate();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
        e.preventDefault()

        const res = await fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Credentials"); 
            console.log("Invalid Credentials");
        } else {
            window.alert("Login Successful"); 
            console.log("Login Successful");
            navigate("/videolist");
        }
    }

  return (
    <div className={styles.loginPageInvestor}>
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
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <b className={styles.logIn}>Log in</b>
        <button
          className={styles.frameInner}
          onClick={loginUser}
          name="submit"
        />
        <img className={styles.lineIcon} alt="" src="../line-10.svg" />
        <img className={styles.frameChild1} alt="" src="../line-10.svg" />
        <div className={styles.logIn1}>Log in</div>
      </div>
    </div>
  );
};

export default LoginPageInvestor;
