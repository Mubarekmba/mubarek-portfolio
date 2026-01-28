// src/sections/About/AboutSection.jsx
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import SectionHeading from "../components/SectionHeading.jsx";
import styles from "./AboutSection.module.css";

export default function AboutSection({ data, person }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <Container>
        <SectionHeading
          eyebrow="ABOUT"
          title={data.title}
          subtitle="A quick snapshot of what I do and how I work."
        />

        <Row className="g-4 align-items-stretch">
          {/* LEFT CARD: Profile & Details */}
          <Col lg={4}>
            <motion.div
              className={styles.glassCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.profileContent}>
                <div className={styles.avatarWrapper}>
                  <img
                    src={person.profileImage}
                    alt={person.name}
                    className={styles.avatar}
                  />
                  <div className={styles.onlineDot} />
                </div>

                <h3 className="h4 fw-bold mb-1">{person.name}</h3>
                <p className="text-muted small mb-0">{person.role}</p>

                <div className={styles.metaList}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Location</span>
                    <span className={styles.metaValue}>{person.location}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Email</span>
                    <a
                      href={`mailto:${person.email}`}
                      className={styles.metaValue}
                    >
                      {person.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* RIGHT CARD: Bio & Stats */}
          <Col lg={8}>
            <motion.div
              className={styles.glassCard}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.bioContent}>
                {data.paragraphs.map((p, idx) => (
                  <p key={idx} className={styles.description}>
                    {p}
                  </p>
                ))}

                <div className={styles.statGrid}>
                  {data.highlights.map((h, idx) => (
                    <motion.div
                      key={idx}
                      className={styles.statItem}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className={styles.statValue}>{h.value}</span>
                      <span className={styles.statLabel}>{h.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  <Button
                    href="#contact"
                    className="px-4 py-2"
                    style={{
                      background: "#8B5CF6",
                      border: "none",
                      borderRadius: "12px",
                      fontWeight: "600",
                    }}
                  >
                    Get in touch
                  </Button>
                  <Button
                    variant="outline-light"
                    href="#projects"
                    className={styles.btnSecondary}
                  >
                    See projects
                  </Button>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
