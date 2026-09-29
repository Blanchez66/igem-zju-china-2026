import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Pages from "../pages.ts";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let pointerInNavbar = false;
    const updateNavbarVisibility = (mouseY?: number) => {
      const isAtTop = window.scrollY <= 8;
      const isMouseNearNavbar = mouseY !== undefined && mouseY <= 80;

      setIsVisible(isAtTop || isMouseNearNavbar || pointerInNavbar);
    };

    const handleScroll = () => updateNavbarVisibility();
    const handleMouseMove = (event: MouseEvent) => {
      pointerInNavbar =
        event.target instanceof Node &&
        !!navbarRef.current?.contains(event.target);
      updateNavbarVisibility(event.clientY);
    };

    updateNavbarVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [location.pathname]);

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
      ref={navbarRef}
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      aria-label="Main navigation"
      className={`nest-navbar ${isVisible || expanded ? "" : "navbar-hidden"}`}
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
