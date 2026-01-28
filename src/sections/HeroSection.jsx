// src/sections/Hero/HeroSection.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeroVisual from "./HeroVisual";
import styles from "./HeroSection.module.css";

export default function HeroSection({ data }) {
  const [index, setIndex] = useState(0);

  // Use words from data prop, fallback to empty array if not found
  const words = data.typewriterWords || [];

  useEffect(() => {
    if (words.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [words]);

  return (
    <section id="home" className={styles.hero}>
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Dynamic Subtitle / Badge */}
              <div className={styles.badge}>{data.subtitle}</div>

              <h1 className={styles.title}>
                {data.titlePrefix} <br />
                <span className={styles.typewriterWrapper}>
                  <AnimatePresence mode="wait">
                    {words.length > 0 && (
                      <motion.span
                        key={words[index]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className={styles.highlight}
                      >
                        {words[index]}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </h1>

              {/* Dynamic Description */}
              <p className={styles.description}>{data.description}</p>

              {/* Dynamic Buttons */}
              <div className="d-flex gap-3 mt-4">
                <Button className={styles.btnPrimary} href={data.cta.href}>
                  {data.cta.label}
                </Button>

                {/* Secondary CTA from siteData */}
                <Button
                  className={styles.btnSecondary}
                  href={data.secondaryCta?.href || "#projects"}
                >
                  {data.secondaryCta?.label || "Explore Projects"}
                </Button>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <HeroVisual />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
