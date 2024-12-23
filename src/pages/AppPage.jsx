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
        const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
        const response = await fetch(`${API_URL}/api/appetizers`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status" />
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center my-5">
        There was an error fetching the recipes: {error}
      </Alert>
    );
  }

  return (
    <>
      <TopNavbar />
      <Container fluid className="my-4">
        <Row>
          {recipes.map((recipe) => (
            <Col key={recipe._id} sm={6} md={4} lg={3} className="mb-4">
              <Card
                className="recipe-card"
                onClick={() => navigate(`/recipe/${recipe._id}`)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  className="recipe-card-img"
                  src={recipe.image_url}
                  alt={recipe.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{recipe.name}</Card.Title>
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
