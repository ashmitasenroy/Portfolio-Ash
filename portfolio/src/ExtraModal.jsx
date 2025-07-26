import { Modal, Button } from "react-bootstrap";

const CertModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static" dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Certifications</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <div className="modal-section">
          <p><strong>Vice President- Enactus SMIT</strong></p>
          <p><em>Oct 2024 - May2025</em></p>
          <p>Google Developer Student Club - Lead(Editorial)</p>
          <p><em>Aug 2023 - Dec 2024</em></p>
          <p>TEDxSMIT- Coordinator</p>
          <p><em>Oct 2023</em></p>
          <p>Business Hackathon Runner's Up</p>
          <p><em>August 2023</em></p>
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
