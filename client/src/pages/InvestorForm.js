import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./InvestorForm.module.css";

const InvestorForm = () => {
  const navigate = useNavigate();

    const [iinfo, setIinfo] = useState({
      experience:"" , country:"" , tier:"" , income:"" , panno:"" 
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setIinfo({ ...iinfo, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { experience, country, tier, income, panno } = iinfo;

        const res = await fetch('/iinfo', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              experience, country, tier, income, panno
            })
        });

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration"); 
            console.log("Invalid Registration");
        } else {
            window.alert(" Registration Successful"); 
            console.log("Successful Registration");
            navigate("/investorform2");
        }
    }

  return (
    <div className={styles.investorForm}>
      <div className={styles.investorFormChild} />
      <b className={styles.aboutYou}>About you</b>
      <div className={styles.rectangleParent}>
        {/* <input className={styles.instanceChild} type="text" name="experience" /> */}

        <select className={styles.instanceChild} type="text" name="experience" value={iinfo.experience}
          onChange={handleInputs}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div className={styles.areYouInvesting}>
          Are you investing for the first time?
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <input className={styles.instanceChild} type="text" name="country" value={iinfo.country}
          onChange={handleInputs}/>
        <div className={styles.areYouInvesting}>Country you live in?</div>
      </div>
      <div className={styles.rectangleContainer}>
        <select className={styles.instanceChild} type="text" name="tier" value={iinfo.tier}
          onChange={handleInputs}> 
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
        <input className={styles.instanceChild} type="number" name="income" value={iinfo.income}
          onChange={handleInputs}/>
        <div className={styles.areYouInvesting}>Your annual income?</div>
      </div>
      <div className={styles.rectangleParent1}>
        <button
          className={styles.frameChild}
          onClick={PostData}
          name="submit"
        />
        <div className={styles.submit}>Submit</div>
      </div>
      <div className={styles.rectangleParent2}>
        <input className={styles.instanceChild} type="number" name="panno"value={iinfo.panno}
          onChange={handleInputs}/>
        <div className={styles.areYouInvesting}>PAN No.</div>
      </div>
      
      <NavBar />
    </div>
  );
};

export default InvestorForm;
