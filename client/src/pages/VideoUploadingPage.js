import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./VideoUploadingPage.module.css";

const VideoUploadingPage = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/signup-page-investor");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/signup-page-investor");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/login-page-founder");
  }, [navigate]);

  return (
    <div className={styles.videoUploadingPage}>
      <div className={styles.videoUploadingPageChild} />
      <button
        className={styles.videoUploadingPageItem}
        onClick={onRectangleButtonClick}
      />
      <button
        className={styles.videoUploadingPageInner}
        onClick={onRectangleButton1Click}
      />
      <b className={styles.upload}>Upload</b>
      <b className={styles.viewFile}>View file</b>
      <b className={styles.letUsHelp}>Let us help you</b>
      <div className={styles.step2}>Step 2</div>
      <input className={styles.rectangleInput} type="text" />
      <div className={styles.uploadVideoOf}>Upload video of pitch</div>
      <button className={styles.chooseFilesWrapper}>
        <div className={styles.chooseFiles}>Choose files</div>
      </button>
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButton2Click}
      />
      <div className={styles.submitWrapper}>
        <div className={styles.submit}>Submit</div>
      </div>
      <NavBar fAQTarget="_blank" homeTarget="_blank" contactUsTarget="_blank" />
    </div>
  );
};

export default VideoUploadingPage;
