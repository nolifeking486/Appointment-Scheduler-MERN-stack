import React, {useEffect} from "react";
import axios from "axios";
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
        <React.Fragment>
            <h1> Appointment Scheduler BPGC</h1>
            <div className="container">
               <div className="row">
                <div className="col-sm">
                <div class="card">
  <img src={"images\BPGClogo.png"} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
    <a href="\login" className="btn btn-primary" >Login</a>
    <a href="\register" className="btn btn-primary">Register</a>
    </p>
  </div>
</div>.
                </div>
            </div>
            </div>
        </React.Fragment>
    );
};

export default Homepage