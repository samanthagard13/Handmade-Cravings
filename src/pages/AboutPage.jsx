import React from "react";
import CustomNav from "../components/Navbar";
import About from '../components/About';
import Footer from '../components/Footer';
import { Card, Image } from "react-bootstrap";


function AboutPage() {
    return(
        <>
        <CustomNav/>
        <h2 className="wwa">What Were About</h2>
        <About/>
        <Card>
        <Card.Img src="/images/RenderedImage.jpg" fluid/>
        </Card>
        <Footer/>
        </>
    )
}

export default AboutPage;