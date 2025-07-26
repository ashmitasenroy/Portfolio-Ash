import { Modal, Button } from "react-bootstrap";

const AchievementsModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      className="custom-modal"
    >
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>My Achievements</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <div className="modal-content-wrapper">
          <ul>
            <li>National Finalist – Smart India Hackathon 2024</li>
            <li>Dark Patterns Buster Hackathon - Finalist (Round 4)</li>
            <li>State-level-Award - Guides & Scouts</li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        <Button className="gradient-btn" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AchievementsModal;
