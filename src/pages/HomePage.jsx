import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainPhoto from "../components/MainPhoto"
import TopNavbar from "../components/TopNavbar";
import About from "../components/About";
import RecentPosts from "../components/RecentPosts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HomeComp from "../components/Home-Component";

function HomePage() {
  return (
    <>
      <TopNavbar />
      <Container fluid>
      

        <Row lg={12} md={12} sm={12}>
          
            <MainPhoto />
          
        </Row>
        <Row lg={12} md={12} sm={12}>
          <About />
        </Row>
        <Row>
          <RecentPosts />
        </Row>
        <Row lg={12} md={12} sm={12} >
          <HomeComp />
        </Row>
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
