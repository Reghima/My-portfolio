import React from "react";
import NavBar from "../Navbar/Navbar";
import "./Home.css";
import Intro from "../intro/Intro";
import HomeIntro from "../HomeIntro.js/HomeIntro";
import Technologies from "../Technologies/Technologies";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <HomeIntro />
      <Intro />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
