import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function AppointmentDetailsPopUp(props) {
    const handleApproveClick = async () => {
        try {
          await axios.put(`/api/v1/user/appointments/${props._id}`, { status: 'Approved' });
          props.handleCloseModal();
        } catch (error) {
          console.log(error);
        }
      };
      const handleRejectClick = async () => {
        try {
          await axios.put(`/api/v1/user/appointments/${props._id}`, { status: 'Rejected' });
          props.handleCloseModal();
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <Modal show={true} onHide={props.handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Appointment Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>To: {props.to}</p>
        <p>From: {props.from}</p>
        <p>Student Email: {props.studemail}</p>
        <p>ID: {props.id}</p>
        <p>Subject: {props.subject}</p>
        <p>Query: {props.query}</p>
        <p>Start Time: {props.starttime}</p>
        <p>Slot: {props.slot}</p>
      </Modal.Body>
      <Modal.Footer>
  <Button variant="success" onClick={handleApproveClick} style={{ backgroundColor: 'green' }} >
    Approve
  </Button>
  <Button variant="danger" onClick={handleRejectClick} style={{ backgroundColor: 'red' }}>
    Reject
  </Button>
</Modal.Footer>
    </Modal>
  );
}

export default AppointmentDetailsPopUp;
