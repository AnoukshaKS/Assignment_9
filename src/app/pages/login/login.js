import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

import axios from 'axios';

export default function Login(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error,setError] = useState(null);
    const navigate = useNavigate();
    let onSubmitHandler = (e)=>{
        e.preventDefault();
        const param = {
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        var url= "mongodb+srv://rooot:webd@cluster0.w8efj4b.mongodb.net/?retryWrites=true&w=majority/user/login"
        axios.post(url,param).then((response)=>{
            props.appCallBack(response.data);
            navigate(`/`);

        }).catch((e)=>{
            setError("Some Error has occured")
            if(e.response.data.error.message){
                setError(e.response.data.error.message);
            }   
            
        })
        
    }
  
    function loginn(){
        console.warn(name, email, password)
    }
    


  return (
    <div className='loginForm'>
        <h4>Login</h4>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name'/>
                    onChange={(e) => setName(e.target.value)}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email'/>
                    onChange={(e) => setEmail(e.target.value)}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password'/>
                    onChange={(e) => setPassword(e.target.value)}

                </Form.Group>
                <Form.Group>
                <Form.Text type="invalid">
                    {error}
                </Form.Text>
                </Form.Group>
                <Button variant="primary" onClick={loginn} type="submit">
                   Submit
                </Button>
                
        </Form>

    </div>
  )
}
