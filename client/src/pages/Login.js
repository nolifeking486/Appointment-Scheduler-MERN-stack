import React from "react"
import {Form, Input, message} from 'antd'
import { useDispatch } from "react-redux"
import { showLoading,hideLoading } from "../redux/features/alertSlice"
import {Link, useNavigate} from 'react-router-dom'
import "../styles/LoginStyle.css"
import axios from "axios"

const Login = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //form handler

    
    const onFinishHandler = async(values) => {
        try
        {   
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/login', values)
            window.location.reload();
            dispatch(hideLoading());
            if(res.data.success)
            {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("name", res.data.name)
                localStorage.setItem("email", res.data.email)
                message.success("Login Successful")
                navigate("/")
            }
            else
            {
                message.error(res.data.message)
            }
        }
        catch(error)
        {
            dispatch(hideLoading());
            console.log(error)
            message.error('Something went wrong')
        }
    };
    return (
        <>
            <div className="form-container">
                <Form layout="vertical" onFinish={onFinishHandler} className="login-form">
                    <h2 className="text-center">Login Form</h2>
                    <Form.Item label="Email" name="email">
                    <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                    <Input type="password" required />
                    </Form.Item>
                    <Link to="/register" className="m-4"> Not Registered? Register Here! </Link>
                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>
                </Form>
            </div>
        </>
    );
};
export default Login