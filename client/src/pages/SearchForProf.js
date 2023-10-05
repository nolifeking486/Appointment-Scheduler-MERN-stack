import { useState } from "react";
import { Card } from "react-bootstrap";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBCol, MDBIcon } from "mdbreact";
import Layout from "../components/Layout";
import "./../styles/SearchForProf.css"
import PopUp from "../components/Popup";

const SearchForProf = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

    // Perform search operation using searchTerm
    // Here we are just using a sample data for demo purpose
    const handleSearch = async (event) => {
        event.preventDefault();
        const response = await fetch(`/api/v1/user/searchProfessors?q=${searchTerm}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = await response.json();
        setSearchResults(data);
      };
      const customClear = () => {
        setSearchResults([]);
        setSearchTerm("");
    }

  return (
    <Layout>
      <h2 className="text-center"> Enter the Name of the Professor </h2>
      <h4 className="text-center"> Search to schedule an appointment </h4>
      <MDBCol md="6" className="mx-auto">
        <form className="form-inline mt-4 mb-4" onSubmit={handleSearch}>
          <div className="d-flex align-items-center">
            <MDBIcon icon="search"/>
            <input className="form-control form-control-sm ml-3 w-75" style = {{marginLeft: "10px"}}type="text" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="btn btn-primary ml-2" type="submit" style={{marginLeft: "10px"}}>Search</button>
            <button className="btn btn-primary ml-2" type="reset" onClick={customClear} style={{marginLeft : "10px"}}>Reset</button>
          </div>
        </form>
      </MDBCol>
      <div className="d-flex flex-wrap justify-content-center">
        {searchResults.map((result, index) => (
            <MDBCard className='customCard' key={index}>
            <MDBCardBody>
              <MDBCardTitle>{result.name}</MDBCardTitle>
              <MDBCardText>{result.department}</MDBCardText>
              <PopUp name = {result.name} email = {result.email} />
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </Layout>
  );
};

export default SearchForProf;
