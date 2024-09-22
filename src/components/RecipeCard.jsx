import React from "react";
import { Card, Image} from "react-bootstrap";

function RecipeCard({recipe}) {
    return (
        <>
            <Card className="recipe-card">
                <Card.Img className="recipe-card-img" src="/images/recent1.jpg" />
                <Card.Body className="recipe-card-title">
                    <Card.Title>{recipe.name}</Card.Title>
                </Card.Body>
                {/* <Button className="all-btn">Get The Recipe</Button> */}
            </Card>
        </>
    )
}

export default RecipeCard;