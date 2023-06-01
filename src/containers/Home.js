// Init
import React, { Fragment } from "react";

// Importing Components
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Who from "../components/whoWe"
import Support from "../components/support"
import OurStory from "../components/OurStory"
import SuccessStory from "../components/SuccesMain"
import Partner from "../components/Partner";
import Cause from "../components/Cause";
import NewUpdate from '../components/newUpadate'
import Footer from "../components/Footer";
// Home Component
export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeroSection/>
      <Who/>
      <Cause/>
      {/* <Support/> */}
      <OurStory/>
      <SuccessStory/>
      <Partner/>
      <NewUpdate/>
      <Footer/>
    </Fragment>
  );
}
