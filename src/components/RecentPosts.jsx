import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

function RecentPosts() {
  return (
    <>
    <h1 className="card-title">Recent Posts</h1>
      <Row >
        <Col lg={6}>
          <Card className="recent-posts">
            <Card.Img className="card-img" src="/images/recent1.jpg" />
            <Card.Body>
              <Card.Title>Spicy Ginger Chicken and Green Beans</Card.Title>
              <Button className="all-btn">Get The Recipe</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="recent-posts">
            <Card.Img className="card-img" src="/images/recent2.jpg" />
            <Card.Body>
              <Card.Title>Roasted Red Pepper and Tomato Soup</Card.Title>
            </Card.Body>
            <Button className="all-btn">Get The Recipe</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card className="recent-posts">
            <Card.Img className="card-img" src="/images/recent3.jpg" />
            <Card.Body>
              <Card.Title>Fresh Pasta Sauce</Card.Title>
            </Card.Body>
            <Button className="all-btn">Get The Recipe</Button>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="recent-posts">
            <Card.Img className="card-img" src="/images/recent5.jpg" />
            <Card.Body>
              <Card.Title>The Perfect Fried Egg</Card.Title>
            </Card.Body>
            <Button className="all-btn">Get The Recipe</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default RecentPosts;
