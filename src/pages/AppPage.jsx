import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import CustomNav from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Card, Col, Row } from "react-bootstrap";

function AppPage() {
    return(
        <>
        <CustomNav/>
            <h2 className="titles">Appetizer Recipes</h2>
            <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        <Footer/>
        </>
    )
}

export default AppPage;