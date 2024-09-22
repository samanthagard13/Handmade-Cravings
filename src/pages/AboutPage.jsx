import React from "react";
import TopNavbar from "../components/TopNavbar";
import About from '../components/About';
import Footer from '../components/Footer';
import { Card } from "react-bootstrap";


function AboutPage() {
    return(
        <>
        <TopNavbar/>
        <h2 className="wwa">What Were About</h2>
        <About/>
        
        <Footer/>
        </>
    )
}

export default AboutPage;