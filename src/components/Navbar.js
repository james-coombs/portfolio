import portfolioData from "../portfolioData";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavDropdownExample() {
  const handleSelect = eventKey => alert(`selected ${eventKey}`);

  return (
    <Nav
      variant=""
      className="justify-content-center navbar"
      activeKey="1"
      onSelect={handleSelect}
    >
      {Object.keys(portfolioData.navItems).map((key, i) => (
        <Nav.Item key={i}>
          <Nav.Link eventKey={i} href={portfolioData.navItems[key]}>
            {key}
          </Nav.Link>
        </Nav.Item>
      ))}

      {/* <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  );
}

// render(<NavDropdownExample />);
