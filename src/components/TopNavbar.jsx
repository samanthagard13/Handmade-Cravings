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
                <Link to="/" onClick={handleOffcanvasClose} className="nav-link">
                  Home
                </Link>
                <NavDropdown title="Recipes">
                  <Link
                    to={"/appetizers"}
                    onClick={handleOffcanvasClose}
                    className="dropdown-item"
                  >
                    Appetizers
                  </Link>
                  <Link
                    to={"/dinners"}
                    onClick={handleOffcanvasClose}
                    className="dropdown-item"
                  >
                    Dinners
                  </Link>
                  <Link
                    to={"/desserts"}
                    onClick={handleOffcanvasClose}
                    className="dropdown-item"
                  >
                    Desserts
                  </Link>
                  <Link
                    to={"/drinks"}
                    onClick={handleOffcanvasClose}
                    className="dropdown-item"
                  >
                    Drinks
                  </Link>
                </NavDropdown>
                {/* <Link to="/about" onClick={handleOffcanvasClose} className="nav-link">
                  About
                </Link> */}
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
