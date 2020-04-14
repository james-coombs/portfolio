import portfolioData from "../portfolioData";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function NavDropdownExample() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Router>
      <Nav
        variant=""
        className="container justify-content-center navbar main-nav"
        activeKey="1"
        // onSelect={handleSelect}
      >
        {Object.keys(portfolioData.navItems).map((key, i) => (
          <Nav.Item className="nav-item" key={i}>
            <Link smooth to={portfolioData.navItems[key]}>
              {key}
            </Link>
          </Nav.Item>
        ))}

        {/* <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
      </NavDropdown> */}
      </Nav>
    </Router>
  );
}

// render(<NavDropdownExample />);
