import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function AppPage() {
  const recipeExamples = [
    { id: 1, name: "Bruschetta" },
    { id: 2, name: "Stuffed Mushrooms" },
    { id: 3, name: "Guacamole" },
    { id: 4, name: "Spring Rolls" },
    { id: 5, name: "Nachos" },
    { id: 6, name: "Stuffed Mushrooms" },
    { id: 7, name: "Guacamole" },
    { id: 8, name: "Spring Rolls" },
    { id: 9, name: "Nachos" },
  ];

  return (
    <>
      <TopNavbar />
      <Container fluid>
        <Row>
          {recipeExamples.map((recipe) => (
            <Col key={recipe.id} sm={6} md={4} lg={3}>
              <Link to={`/recipe/${recipe.id}`}>
                <RecipeCard recipe={recipe} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default AppPage;
