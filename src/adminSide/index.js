import React, { useState, useEffect } from "react";
import "../css/employee.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Admin = () =>{

    const [userName , setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = async (event) =>{
        event.preventDefault();
        console.log("Username = ", userName);
        console.log("Password = ", password);
    }

    return(
        <div className="container">
      <div className="loginPage">

        <div className="row align-items-start mt-2">
          <h1>Admin Sign In</h1>
        </div>

        <Form className="mt-3" onSubmit={submitLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User's Admin</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter User Name"
                onChange={(e) => setUsername(e.target.value)}
            />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
    )
}

export default Admin;