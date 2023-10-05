import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import AppointmentCard from "../components/AppointmentCard";

const YourAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const myname =  localStorage.getItem("name");
    axios.get(`/api/v1/user/getappointments?from=${myname}`).then((res) => {
      setAppointments(res.data);
    });
  }, []);

    return(
        <Layout>
            <h2 className="text-center"> Your Appointments </h2>
            <div className="appointments-container">
        {appointments.map((appointment) => (
            <AppointmentCard status = {appointment.status} subject = {appointment.subject} createdAt = {appointment.createdAt} to = {appointment.to} starttime = {appointment.starttime}/>
        ))}
        </div>
        </Layout>
    );
};

export default YourAppointments;