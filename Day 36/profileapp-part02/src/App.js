import React from "react";
import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <ProfileCard
        name="Saood Masood"
        bio="Web Developer | AI Enthusiast | Lifelong Learner"
        image="./profile.jpg"
      />
      <ProfileCard
        name="Bill Gates"
        bio=" Software Engineer | Philantrophist | Enterprenuer "
        image="./billgates.jpg"
      />
      <Footer />
    </div>
  );

}
export default App;
