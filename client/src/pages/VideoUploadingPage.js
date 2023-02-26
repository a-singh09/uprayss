import React, {useState} from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./VideoUploadingPage.module.css";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";

const VideoUploadingPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }

    formdata.append("name", name);

    axios
      .post(`${BACKEND_URI}/api/v1/media/create`, formdata)
      .then((success) => {
        getAllMedias();
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };


  return (
    <div className={styles.videoUploadingPage}>
      <div className={styles.videoUploadingPageChild} />
      
      <b className={styles.upload}>Upload</b>
      <b className={styles.viewFile}>View file</b>
      <b className={styles.letUsHelp}>Let us help you</b>
      <div className={styles.step2}>Step 2</div>
      <input className={styles.rectangleInput} type="text" name="name"
            id="name" onChange={(e) => setName(e.target.value)}/>
      <input className={styles.rectangleInput} type="file"
            name="videos"
            id="videos"
            multiple
            accept=".mp4, .mkv"
            style={{left: '57.06rem'}}
            onChange={(e) => {
              setVideos(e.target.files);
            }}/>
      <div className={styles.uploadVideoOf}>Upload video of pitch</div>
      <button className={styles.chooseFilesWrapper}>
        <div className={styles.chooseFiles}>Choose files</div>
      </button>
      <button
        className={styles.rectangleButton}
        onClick={handleSubmit}
      />
      <div className={styles.submitWrapper}>
        <div className={styles.submit}>Submit</div>
      </div>
      <NavBar fAQTarget="_blank" homeTarget="_blank" contactUsTarget="_blank" />
    </div>
  );
};

export default VideoUploadingPage;
