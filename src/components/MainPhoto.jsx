import React from "react";
import { Card } from "react-bootstrap";

function MainPhoto() {
    return (
        <>
        <Card className="main-photo">
            <Card.Body className="overlay-content">
                <h1 className="photo-title" >Crafted By Hand, Craved By You</h1>
                <p className="photo-body" >Recipes That Inspire Scratch Cooking And Quality Meals</p>
                <div className="homepage-btn" href="dinners">
                    What's For Dinner?
                </div>
            </Card.Body>
        </Card>
        </>
    )
}


export default MainPhoto;