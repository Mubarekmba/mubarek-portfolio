// src/components/ProjectModal.jsx
import { Modal, Button } from "react-bootstrap";

export default function ProjectModal({ show, onHide, project, customStyles }) {
  if (!project) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      contentClassName={customStyles.modalContent}
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        className="border-0 px-4 pt-4"
      >
        <Modal.Title className="fw-bold">{project.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-4 pb-4">
        <img
          className={customStyles.modalImg}
          src={project.image}
          alt={project.title}
        />

        <div className="mb-4">
          <h5
            className="text-accent mb-2"
            style={{ color: "#8B5CF6", fontSize: "0.9rem", fontWeight: "700" }}
          >
            PROJECT OVERVIEW
          </h5>
          <p className="text-secondary" style={{ lineHeight: "1.8" }}>
            {project.description}
          </p>
        </div>

        <div className="mb-4">
          <h5
            className="mb-3"
            style={{ fontSize: "0.9rem", fontWeight: "700" }}
          >
            TECHNOLOGIES
          </h5>
          <div className={customStyles.tagGroup}>
            {project.tags.map((t) => (
              <span key={t} className={customStyles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0 px-4 pb-4">
        <Button
          variant="outline-light"
          onClick={onHide}
          className="rounded-pill px-4"
        >
          Close
        </Button>
        <Button
          href={project.links?.live}
          target="_blank"
          className="rounded-pill px-4"
          style={{ background: "#8B5CF6", border: "none" }}
        >
          View Live Site
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
