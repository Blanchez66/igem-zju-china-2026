import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Pages from "../pages.ts";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const updateNavbarVisibility = (mouseY?: number) => {
      const isAtTop = window.scrollY <= 8;
      const isMouseNearNavbar = mouseY !== undefined && mouseY <= 80;

      setIsVisible(isAtTop || isMouseNearNavbar);
    };

    const handleScroll = () => updateNavbarVisibility();
    const handleMouseMove = (event: MouseEvent) => {
      updateNavbarVisibility(event.clientY);
    };

    updateNavbarVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHomePage]);

  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
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
        <Nav.Link key={`page-${pageIndex}`} as={Link} to={item.path}>
          {item.name}
        </Nav.Link>
      );
    }
  });

  return (
    <BootstrapNavbar
      expand="lg"
      className={`navbar ${isVisible ? "" : "navbar-hidden"}`}
      fixed="top"
    >
      <Container>
        <BootstrapNavbar.Brand className="navbar-brand">
          <Link to="/" className="brand-link">
            <img
              src={`${import.meta.env.BASE_URL}images/team-logo.png`}
              alt={`${import.meta.env.VITE_TEAM_NAME} logo`}
              className="brand-logo"
            />
            <span>{import.meta.env.VITE_TEAM_NAME}</span>
          </Link>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
