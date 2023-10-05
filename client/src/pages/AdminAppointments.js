import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import DisplayCardAdmin from "../components/DisplayCardAdmin.js";

const AdminAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const myemail = localStorage.getItem("email");
        axios.get(`/api/v1/user/appointments?receiveremail=${myemail}`)
          .then(response => {
            setAppointments(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return(
        <Layout>
            <h2 className="text-center"> Your Appointments </h2>
            <div>
      {appointments.map(appointment => (
        <DisplayCardAdmin
          _id={appointment.id}
          status={appointment.status}
          subject={appointment.subject}
          createdAt={appointment.createdAt}
          to={appointment.to}
          starttime={appointment.starttime}
          from={appointment.from}
          studemail={appointment.studemail}
          receiveremail={appointment.receiveremail}
          query={appointment.query}
          name={appointment.name}
          id={appointment.id}
          slot={appointment.slot}
        />
      ))}
    </div>
        </Layout>
    );
};

export default AdminAppointments;