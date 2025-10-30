import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import React, { useState } from "react";


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [followers, setFollowers] = useState(4809);

  const toggleTheme = () => setDarkMode(!darkMode);
  const increaseFollowers = () => setFollowers(followers +1);
  const decreaseFollowers = () => setFollowers(followers -1);




  return (
    <div className={darkMode ? styles.dark: styles.light}>

      <Header />
      <br/>
      <button onClick={toggleTheme} className={styles.themeBtn}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <ProfileCard
        name="Saood Masood"
        bio="Writer | Engineer | AI Enthusiast"
        image="./profile.jpg"
      />

      <div className={styles.counter}>
        <h3>Followers: {followers}</h3>
        <button onClick={increaseFollowers}>Increase Follow</button>
        <button onClick={decreaseFollowers}>Decrease Follow</button>
      </div>

      <br/>
      <br/>

      <Footer />
    </div>
  );

}
export default App;
