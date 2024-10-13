import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap"; 
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AppPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        console.log("API URL:", API_URL);
        const response = await axios.get(`${API_URL}/api/Handmade-Cravings/Appetizers`);
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching app recipes:', error);
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
              <Card className="recipe-card" onClick={() => navigate(`/recipe/${recipe._id}`)}>
                <Card.Img className="recipe-card-img" src={recipe.image_url} alt={recipe.name} />
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
