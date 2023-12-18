import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

function RecentPosts() {
  return (
    <>
    <h2 className="m-4 titles">Recent Posts</h2>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Button className="all-btn">Get The Recipe</Button>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Button className="all-btn">Get The Recipe</Button>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 mt-2">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Button className="all-btn">Get The Recipe</Button>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Button className="all-btn">Get The Recipe</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default RecentPosts;
