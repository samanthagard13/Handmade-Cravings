import React, { useState } from "react";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

function TopNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  return (
    <>
      <Navbar className="mt-2 mb-2 bg-white">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Handmade Cravings
          </Navbar.Brand>

          <Button className="menu-btn" onClick={handleOffcanvasToggle}>
            <FontAwesomeIcon icon={faBars} className="bars" />
          </Button>
          <Offcanvas
            show={showOffcanvas}
            placement={"end"}
            onHide={handleOffcanvasClose}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
              <Nav.Link href="/" onClick={handleOffcanvasClose}>
                  Home
                </Nav.Link>
                <NavDropdown title="Recipes">
                  <Nav.Link href="appetizers" onClick={handleOffcanvasClose}>
                    Appetizers
                  </Nav.Link>
                  <Nav.Link href="dinners" onClick={handleOffcanvasClose}>
                    Dinners
                  </Nav.Link>
                  <Nav.Link href="desserts" onClick={handleOffcanvasClose}>
                    Desserts
                  </Nav.Link>
                  <Nav.Link href="drinks" onClick={handleOffcanvasClose}>
                    Drinks
                  </Nav.Link>
                </NavDropdown>
                <Nav.Link href="about" onClick={handleOffcanvasClose}>
                  About
                </Nav.Link>
                <Nav.Link>
                  <FontAwesomeIcon icon={faPinterest} />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
