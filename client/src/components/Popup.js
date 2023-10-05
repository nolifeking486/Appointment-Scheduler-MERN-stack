import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { message } from 'antd';
import { useSelector } from "react-redux";

function PopUp(props) {
  const profname = props.name;
  const profemail = props.email;
  const { user } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [slot, setSlot] = useState("15");
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }
  function handleSubmit() {
    const formData = {
      to: profname,
      from: user?.name,
      studemail: user?.email,
      receiveremail: profemail,
      subject: document.getElementById("subject").value,
      query: document.getElementById("query").value,
      name: document.getElementById("name").value,
      id: document.getElementById("id").value,
      starttime: document.getElementById("starttime").value,
      slot: document.querySelector('input[name="slot"]:checked').value,
    };

    axios.post('/api/v1/user/appointments', formData)
    .then(response => {
      message.success(<h6>Appointment Raised!</h6>,5)
      console.log(response.data);
      setShow(false);
    })
    .catch(error => {
      message.error("Something went wrong",5)
      console.error(error);
    });
    setShow(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Schedule Now
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Schedule an Appointment </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div className="mb-3"> To: {profname} </div>
            <div className="form-group">
              <label htmlFor="subject" style={{marginBottom: "10px", marginTop: "10px"}}>Subject: </label>
              <input type="text" name='subject' className="form-control" id="subject" maxLength={75} style={{ width: '100%'}} />
            </div>
            <div className="form-group">
              <label htmlFor="query" style={{marginBottom: "10px", marginTop: "10px"}}>Query: </label>
              <textarea className="form-control"name='query' id="query" maxLength={200} rows={3} style={{ width: '100%' }}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="name" style={{marginBottom: "10px", marginTop: "10px"}}>Name: </label>
              <input type="text" className="form-control" name='name' id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="id" style={{marginBottom: "10px", marginTop: "10px"}}>ID: </label>
              <input type="text" className="form-control"name='id' id="id" />
            </div>
            <div className="form-group">
              <label htmlFor="starttime" style={{marginBottom: "10px", marginTop: "10px"}}>Start Time: </label>
              <input type="time" className="form-control" name='starttime' id="starttime" />
            </div>
            <div className="radio">
            <label style={{marginBottom:"10px", marginTop:"20px"}}>
                <input type="radio" name="slot" checked={true} value="15" onChange={(e) => setSlot(e.target.value)}/>
                15 minutes slot
            </label>
            </div>
            <div className="radio">
            <label style={{marginBottom:"10px", marginTop:"10px"}}>
                <input type="radio" name="slot" value="30"  onChange={(e) => setSlot(e.target.value)} />
                30 minutes slot
            </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}> Submit </Button>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;