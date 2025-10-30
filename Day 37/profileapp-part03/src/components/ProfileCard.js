import React from "react";
import styles from "./ProfileCard.module.css";

function ProfileCard(props) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="Profile" className={styles.image} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCard;
