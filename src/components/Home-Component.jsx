import React from "react";
import { Card, Button } from "react-bootstrap";

function HomeComp() {
    return(
        <>
        <Card className="image-container2">
          <Card.Body className="overlay-content2">
            <h1 className="hero2">Appetizers For Every Occasion</h1>
            <Button className="all-btn" href="appetizers">
              View Recipes
            </Button>
          </Card.Body>
        </Card>
        </>
    );
}

export default HomeComp;