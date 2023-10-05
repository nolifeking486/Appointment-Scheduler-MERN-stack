import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { CheckCircleFilled, CloseCircleFilled, ClockCircleFilled } from '@ant-design/icons';
import './../styles/AppointmentCard.css';
import DisplayPopUp from './DisplayPopUp';

function DisplayCardAdmin(props) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleViewClick = () => {
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
  };

  return (
    <>
      <Card className="customCardAppointment">
        <Card.Header className="header-style">
          Status: {props.status}
          {props.status === 'Pending' && (
            <ClockCircleFilled style={{color: 'grey'}} />
          )}
          {props.status === 'Approved' && (
            <CheckCircleFilled style={{color: 'green'}} />
          )}
          {props.status === 'Rejected' && (
            <CloseCircleFilled style={{color: 'red'}} />
          )}
          Appointment Time: {props.starttime}
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              Student: {props.from}, Subject: {props.subject}
            </p>
            <footer className="blockquote-footer">Request date: {props.createdAt}</footer>
          </blockquote>
        </Card.Body>
        <Card.Footer>
  <button className="btn btn-primary btn-sm ml-3" onClick={handleViewClick} style={{marginLeft: "10px"}}>View</button>
</Card.Footer>
      </Card>

      {showDetailsModal && (
  <DisplayPopUp
    handleCloseModal={handleCloseModal}
    _id={props._id}
    to={props.to}
    from={props.from}
    studemail={props.studemail}
    receiveremail={props.receiveremail}
    subject={props.subject}
    query={props.query}
    name={props.name}
    id={props.id}
    starttime={props.starttime}
    endtime={props.endtime}
    slot={props.slot}
    status={props.status}
    createdAt={props.createdAt}
  />
)}
    </>
  );
}

export default DisplayCardAdmin;
