// src/sections/Skills/SkillsSection.jsx
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../components/SectionHeading.jsx";
import styles from "./SkillsSection.module.css";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className={styles.skillsSection}>
      <Container>
        <SectionHeading
          eyebrow="EXPERTISE"
          title="Technical Proficiency"
          subtitle="A specialized stack focused on performance and scalable architecture."
        />

        <Row className="g-4">
          {skills.map((group, groupIdx) => (
            <Col key={group.title} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1 }}
                className={styles.skillCard}
              >
                <h3 className={styles.categoryTitle}>{group.title}</h3>

                <div className={styles.skillList}>
                  {group.items.map((item) => (
                    <div key={item.name} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{item.name}</span>
                        <span className={styles.skillLevel}>{item.level}%</span>
                      </div>

                      <div className={styles.barContainer}>
                        <motion.div
                          className={styles.barFill}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.2,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
