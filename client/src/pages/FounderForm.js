import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./FounderForm.module.css";

const FounderForm = () => {
  const navigate = useNavigate();

    const [finfo, setFinfo] = useState({
      experience:"" , country:"" , tier:"" , income:"" , panno:"" 
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

        const { experience, country, tier, income, panno } = finfo;

        const res = await fetch('/finfo', {
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
            navigate("/video-uploading-page");
        }
    }

  return (
    <div className={styles.founderForm}>
      <div className={styles.founderFormChild} />
      <b className={styles.letUsHelp}>Let us help you</b>
      <div className={styles.rectangleParent}>
        <input className={styles.instanceChild} type="text" name="startupname" value={finfo.experience}
          onChange={handleInputs}/>
        <div className={styles.areYouInvesting}>Name of your startup</div>
      </div>
      
      <div className={styles.component4}>
        <div className={styles.whatProblemAre}>
          What problem are you solving?
        </div>
        <textarea className={styles.component4Child} type="text" name="problem" value={finfo.problem}
          onChange={handleInputs}/>
      </div>
      <div className={styles.rectangleContainer}>
        <input className={styles.instanceChild} type="number" name="ask" value={finfo.ask}
          onChange={handleInputs}/>
        <div className={styles.areYouInvesting}>Your ask?</div>
      </div>
      <div className={styles.component41}>
        <div className={styles.whatProblemAre}>Write about you?</div>
        <textarea className={styles.component4Child} type="text" name="about" value={finfo.about}
          onChange={handleInputs}/>
      </div>
      <div className={styles.component42}>
        <div className={styles.whatProblemAre}>Addtional information?</div>
        <textarea className={styles.component4Child} type="text" name="additionalinfo" value={finfo.additionalinfo}
          onChange={handleInputs}/>
      </div>
      <div className={styles.frameDiv}>
        <input className={styles.instanceChild} type="number" name="panno" value={finfo.panno}
          onChange={handleInputs}/>
        <div className={styles.areYouInvesting}>PAN No.</div>
      </div>
      <div className={styles.rectangleGroup}>
        <button
          className={styles.frameChild}
          onClick={PostData}
          name="submit"
        />
        <div className={styles.submit}>Submit</div>
      </div>
      <NavBar />
    </div>
  );
};

export default FounderForm;
