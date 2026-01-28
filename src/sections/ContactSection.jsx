// src/sections/Contact/ContactSection.jsx
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading.jsx";
import styles from "./ContactSection.module.css";

export default function ContactSection({ person, social }) {
  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let’s build something great"
          subtitle="I'm currently looking for new opportunities. Feel free to reach out!"
        />

        <Row className="g-4">
          {/* Left Side: Traditional Details */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <h3 className={styles.title}>Contact Details</h3>

              <div className={styles.statusContainer}>
                <div className={styles.statusDot} />
                <span className={styles.statusText}>
                  Open for Freelance & Full-time
                </span>
              </div>

              <div className="flex-grow-1">
                <div className="mb-4">
                  <p className="text-muted small mb-1 uppercase fw-bold">
                    TELEGRAM
                  </p>
                  <p className="fw-bold">{person.telegram}</p>
                </div>
                <div className="mb-4">
                  <p className="text-muted small mb-1 uppercase fw-bold">
                    EMAIL ADDRESS
                  </p>
                  <a
                    href={`mailto:${person.email}`}
                    className={styles.infoLink}
                  >
                    {person.email}
                  </a>
                </div>
                <div className="mb-4">
                  <p className="text-muted small mb-1 uppercase fw-bold">
                    LOCATION
                  </p>
                  <p className="fw-bold">{person.location}</p>
                </div>
              </div>

              <p className="text-secondary small mt-4">
                Based in Addis Ababa, working with clients worldwide.
              </p>
            </motion.div>
          </Col>

          {/* Right Side: Professional Links & Resume (Replacing the Form) */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <h3 className={styles.title}>Professional Channels</h3>

              <div className={styles.linksGrid}>
                <a
                  href={social.linkedin}
                  target="_blank"
                  className={styles.actionLink}
                >
                  <FiLinkedin className={styles.actionIcon} />
                  <span className={styles.actionLabel}>LinkedIn</span>
                </a>
                <a
                  href={social.github}
                  target="_blank"
                  className={styles.actionLink}
                >
                  <FiGithub className={styles.actionIcon} />
                  <span className={styles.actionLabel}>GitHub</span>
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className={styles.actionLink}
                >
                  <FiMail className={styles.actionIcon} />
                  <span className={styles.actionLabel}>Email Me</span>
                </a>
                <a href="#" target="_blank" className={styles.actionLink}>
                  <FiExternalLink className={styles.actionIcon} />
                  <span className={styles.actionLabel}>Blog / Docs</span>
                </a>
              </div>

              <div className="mt-auto">
                <p className="text-center text-muted small mb-3">
                  Interested in my technical background?
                </p>
                <Button
                  href="/resume.pdf" // Ensure you have a resume.pdf in your public folder
                  target="_blank"
                  className={styles.resumeBtn + " w-100"}
                >
                  <FiDownload /> Download My CV
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
