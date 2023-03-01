import React, { useEffect } from "react";
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
                <h1>Home page </h1>
            </Layout>
    );
};

export default Homepage