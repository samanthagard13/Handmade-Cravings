import React from "react";
import { Card, Button } from "react-bootstrap";

function HomeComp() {
    return(
        <>
        <Card className="image-container2">
          <Card.Body className="overlay-content2">
            <h1 className="display-3">Appetizers For Every Occasion</h1>
            <Button className="homepage-btn" href="appetizers">
              View Recipes
            </Button>
          </Card.Body>
        </Card>
        </>
    );
}

export default HomeComp;