import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import AppointmentCardAdmin from "../components/AppointmentCardAdmin";

const ActionCenter = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const myemail = localStorage.getItem("email") || "";
        const fetchAppointments = async () => {
          const res = await axios.get(`/api/v1/user/getpendingappointments?status=Pending&receiveremail=${myemail}`);
          setAppointments(res.data);
        };
        fetchAppointments();
      }, []);

    return(
        <Layout>
            <h2 className="text-center"> Action Center </h2>
                {appointments.length > 0 ? (
                        appointments.map((appointment) => (
                           <AppointmentCardAdmin
                           _id={appointment._id}
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
                        ))
                ) : (
                    <p className="text-center mt-5">No pending appointments found.</p>
                )}
        </Layout>
    );
};

export default ActionCenter;
