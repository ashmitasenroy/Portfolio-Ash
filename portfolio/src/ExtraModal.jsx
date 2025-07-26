import { Modal, Button } from "react-bootstrap";

const CertModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static" dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Certifications</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <div className="modal-section">
          <p><strong>IBM Full Stack Development Course</strong></p>
          <p><em>Coursera</em></p>
          <p>Data Analytics – Accenture-Job Simulation</p>
          <p><em>Forage</em></p>
          <p>Full-Stack Bootcamp – Dr. Angela Yu</p>
          <p><em>Udemy</em></p>
          <p>Google Cloud Career Practitioner</p>
          <p><em>Google Cloud</em></p>
          <p>Human Computer Interaction – Topper 96%</p>
          <p><em>NPTEL</em></p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CertModal;
