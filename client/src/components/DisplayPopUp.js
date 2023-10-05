import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./../styles/DisplayPopUp.css"

function DisplayPopUp(props) {
  return (
    <Modal show={true} onHide={props.handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Appointment Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="status-wrapper">
            {props.status === 'Approved' ? (
            <i className="fas fa-check-circle status-icon green"></i>
            ) : (
            <i className="fas fa-times-circle status-icon red"></i>
            )}
            <p className="status-text">{props.status}</p>
        </div>
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
        <Button variant="secondary" onClick={props.handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DisplayPopUp;
