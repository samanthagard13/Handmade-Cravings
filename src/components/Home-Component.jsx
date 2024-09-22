import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeComp() {
  return (
    <>
      <Card className="image-container2">
        <Card.Body className="overlay-content2">
          <h1 className="hero2">Appetizers For Every Occasion</h1>
          <Link to={"/appetizers"}>
            <Button className="all-btn">View Recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default HomeComp;
