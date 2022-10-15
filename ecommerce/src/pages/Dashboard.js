import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap'

function Dashboard (){

    const navigate = useNavigate() 
    const [loggedIn, setLoggedIn] = useState()   

    useEffect(() => {
        const authString = localStorage.getItem("authString")
        if(authString !== null){
            setLoggedIn(true)
        }
    },[])

    if (!loggedIn){
       navigate("/signin")
    }else{
        return (
            <div>
              <p>Welcome to your Dashboard</p>
              <Button onClick={(e)=>{localStorage.removeItem("authString");navigate("/")}}>Logout</Button>
            </div>
          );
    }
    
  };
export default Dashboard;