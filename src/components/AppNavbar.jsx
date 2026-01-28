import { useCallback } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Major UI decision:
 * Use React-Bootstrap for structure, but keep the navbar visually minimal and
 * rely on our global tokens (colors/typography) for a modern look.
 */
export default function AppNavbar({
  brand,
  items,
  activeId,
  theme,
  onToggleTheme
}) {
  const onNavClick = useCallback((e, href) => {
    if (!href?.startsWith("#")) return;
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    const navOffset = 76; // keep sections from hiding under sticky navbar
    const y = el.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top: id === "home" ? 0 : y, behavior: "smooth" });
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className="app-navbar" data-bs-theme={theme}>
      <Container>
        <Navbar.Brand href="#home" onClick={(e) => onNavClick(e, "#home")}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            {items.map((item) => (
              <Nav.Link
                key={item.href}
                href={item.href}
                active={activeId === item.href.replace("#", "")}
                onClick={(e) => onNavClick(e, item.href)}
              >
                {item.label}
              </Nav.Link>
            ))}

            <Button
              variant={theme === "dark" ? "outline-light" : "outline-dark"}
              className="ms-lg-2 app-navbar__theme"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


