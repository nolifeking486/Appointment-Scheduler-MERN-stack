import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./../styles/HomePage.css"

const Homepage = () => {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <Container fluid className="home-page-container">
        <Row className="home-page-row">
          <Col className="home-page-col">
            <h1>Welcome to the Appointment Scheduler App</h1>
            <p className="home-page-description">
              This app allows you to schedule your appointments with ease and convenience.
              You can schedule appointments with multiple people and keep track of your schedule all in one place.
            </p>
            <Button className="home-page-button" variant="primary" href="/YourAppointments">View Appointments</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Homepage;







/*import React, { useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";

const Homepage = () =>{
    const getUserData = async() => 
    {
        try
        {
            const res = await axios.post('/api/v1/user/getUserData', {}, 
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
        }
        catch(error)
        {
            console.log(error);
        }
    };
    useEffect(() => {
     getUserData();   
    }, []);

    return (
            <Layout>
                <h1>This is your Home page </h1>
            </Layout>
    );
};

export default Homepage*/