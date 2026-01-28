// src/components/AppFooter.jsx
import { Container, Row, Col } from "react-bootstrap";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import styles from "./AppFooter.module.css";

export default function AppFooter({ brand, social, note }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="g-5">
          {/* Brand & Mission */}
          <Col lg={5}>
            <div className={styles.brand}>
              {brand.split("-")[0]}
              <span className={styles.brandSpan}>-{brand.split("-")[1]}</span>
            </div>
            <p className={styles.description}>
              Dedicated to building high-performance web applications with clean
              code and user-centric design principles.
            </p>
          </Col>

          {/* Navigation Links */}
          <Col lg={3} md={6}>
            <div className={styles.heading}>Navigation</div>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#home" className={styles.link}>
                  Home
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#about" className={styles.link}>
                  About
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#skills" className={styles.link}>
                  Skills
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#projects" className={styles.link}>
                  Projects
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#contact" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Social Presence */}
          <Col lg={4} md={6}>
            <div className={styles.heading}>Connect</div>
            <div className={styles.socialGroup}>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Final Bottom Bar */}
      <div className={styles.bottomBar}>
        <Container>
          <p className={styles.copyright}>
            {note} • Crafted with React & Modern CSS
          </p>
        </Container>
      </div>
    </footer>
  );
}
