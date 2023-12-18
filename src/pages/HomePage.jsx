import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import CustomNav from "../components/Navbar";
import About from "../components/About";
import RecentPosts from "../components/RecentPosts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function HomePage() {
  return (
    <>
    <CustomNav/>
      <div className="image-container">
        <Image src="/images/waffles.jpg" fluid />
        <div className="overlay-content">
          <h1>Crafted By Hand, Craved By You</h1>
          <h3>Recipes That Inspire Scratch Cooking And Quality Meals</h3>
          <Button className="homepage-btn">What's For Dinner?</Button>
        </div>
      </div>
        <About/>
        <RecentPosts/>
        <div className="image-container2">
          <Image src="/images/bruschetta.jpeg"/>
          <div className="overlay-content2">
          <h2 className="display-3">Appetizers For Every Occasion</h2>
          
          <Button className="homepage-btn">View Recipes</Button>
        </div>
        </div>
        <Contact/>
        <Footer/>
    </>
  );
}

export default HomePage;
