import portfolioData from "../portfolioData";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function NavDropdownExample() {
  return (
    <Router>
      <Nav
        variant=""
        className="justify-content-center navbar main-nav"
        activeKey="1"
      >
        {Object.keys(portfolioData.navItems).map((key, i) => (
          <Nav.Item className="nav-item" key={i}>
            <Link smooth to={portfolioData.navItems[key]}>
              {key}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </Router>
  );
}
