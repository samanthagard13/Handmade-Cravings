import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainPhoto() {
  return (
    <>
      <Card className="main-photo">
        <Card.Body className="overlay-content">
          <h1 className="photo-title">Crafted By Hand, Craved By You</h1>
          <p className="photo-body">
            Recipes That Inspire Scratch Cooking And Quality Meals
          </p>
          <Link to={"/dinners"}>
            <Button className="homepage-btn">What's For Dinner?</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default MainPhoto;
