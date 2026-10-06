import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Pages from "../pages.ts";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const pages = Pages.filter(
    (item) => !("path" in item && item.path === "/"),
  ).map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
              active={location.pathname === subpage.path}
              onClick={() => setExpanded(false)}
            >
              {subpage.name}
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          active={item.folder.some(
            (subpage) => subpage.path === location.pathname,
          )}
          id={`page-${pageIndex}`}
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link
          key={`page-${pageIndex}`}
          as={Link}
          to={item.path}
          active={location.pathname === item.path}
          onClick={() => setExpanded(false)}
        >
          {item.name}
        </Nav.Link>
      );
    }
  });

  return (
    <BootstrapNavbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      aria-label="Main navigation"
      className="nest-navbar"
      fixed="top"
    >
      <Container fluid>
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="brand-link"
          onClick={() => setExpanded(false)}
        >
          NEST
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            {pages}
            <span
              className="navigation-cart"
              title="Shopping cart — not available yet"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/navigation/cart.svg`}
                alt="Shopping cart (not available yet)"
                width="22"
                height="22"
              />
            </span>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
