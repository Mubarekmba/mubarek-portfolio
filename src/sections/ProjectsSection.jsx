// src/sections/Projects/ProjectsSection.jsx
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({ projects }) {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className={styles.projectSection}>
      <Container>
        <SectionHeading
          eyebrow="PORTFOLIO"
          title="Selected Work"
          subtitle="Building full-stack applications with focus on logic and aesthetics."
        />

        <Row className="g-4">
          {projects.map((p, idx) => (
            <Col key={p.title} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={styles.card}
              >
                <div className={styles.imgWrapper}>
                  <img className={styles.img} src={p.image} alt={p.title} />
                </div>

                <div className="p-4 d-flex flex-column flex-grow-1">
                  <span className={styles.category}>{p.category}</span>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.description}>{p.description}</p>

                  <div className={styles.tagGroup}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.btnGroup}>
                    <Button
                      onClick={() => setSelected(p)}
                      className={styles.btnPrimary}
                    >
                      Details
                    </Button>
                    <Button
                      className={styles.btnSecondary}
                      href={p.links?.live}
                      target="_blank"
                    >
                      Live
                    </Button>
                    <Button
                      className={styles.btnSecondary}
                      href={p.links?.code}
                      target="_blank"
                    >
                      Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <ProjectModal
          show={!!selected}
          onHide={() => setSelected(null)}
          project={selected}
          customStyles={styles}
        />
      </Container>
    </section>
  );
}
