import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function AppPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/Handmade-Cravings/Appetizers"
        );
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.length === 0) {
          throw new Error("No recipes found");
        }
        console.log("Fetched appetizers:", data);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" />
        <span> Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">
        There was an error fetching the recipes: {error}
      </Alert>
    );
  }

  return (
    <>
      <TopNavbar />
      <Container fluid>
        <Row>
          {recipes.map((recipe) => (
            <Col key={recipe._id} sm={6} md={4} lg={3}>
              <Card
                className="recipe-card"
                onClick={() => navigate(`/recipe/${recipe._id}`)}
              >
                <Card.Img
                  className="recipe-card-img"
                  src={recipe.image_url}
                  alt={recipe.name}
                />
                <Card.Body className="recipe-card-title">
                  <Card.Title>{recipe.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default AppPage;
