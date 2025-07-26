import { Modal, Button } from "react-bootstrap";

const ExperienceModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>My Experience</Modal.Title>
      </Modal.Header>

      <Modal.Body className="experience-modal-body">
        <div className="modal-content-wrapper">
          <div className="modal-first">
            <p className="experience-role"><strong>Web Developer Intern - Kabadi Techno</strong></p>
            <p className="experience-date"><em>May 2023 - Oct 2023</em></p>
            <p>Built the official company website with various components.</p>
            <p>Ensured responsiveness across the website using Bootstrap.</p>
          </div>

          <div className="divider" />

          <div className="modal-second">
            <p className="experience-role"><strong>SEO Specialist - Webbees</strong></p>
            <p className="experience-date"><em>Jan 2024 - Mar 2024</em></p>
            <p>Wrote and optimized 15+ product descriptions and blog articles.</p>
            <p>Increased organic traffic by 40% within 2 months through targeted SEO.</p>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="modal-footer-custom">
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
