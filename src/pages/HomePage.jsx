import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import About from "../components/About";
import RecentPosts from "../components/RecentPosts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <div className="image-container">
        <Image src="/images/waffles.jpg" fluid />
        <div className="overlay-content">
          <h1 className="display-3">Crafted By Hand, Craved By You</h1>
          <h2>Recipes That Inspire Scratch Cooking And Quality Meals</h2>
          <Button className="homepage-btn">What's For Dinner?</Button>
        </div>
      </div>
        <About/>
        <RecentPosts/>
        <div className="image-container2">
          <Image src="/images/bruschetta.jpeg"/>
          <div className="overlay-content2">
          <h1 className="display-3">Appetizers For Every Occasion</h1>
          
          <Button className="homepage-btn">View Recipes</Button>
        </div>
        </div>
        <Contact/>
        <Footer/>
    </>
  );
}

export default HomePage;
