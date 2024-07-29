import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const Homepage = () => {

  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const varToken = JSON.parse(localStorage.getItem("token"));
        const response = await fetch('http://localhost:5000/api/v1/bakery/homePage', {
          headers: { Authorization: `Bearer ${varToken}` }
        })

        if (!response.ok) {
         throw new Error('Network response was not ok');
        }
      }
      catch(err){
        console.log(err.message)
        navigate("/login") 
      }
    }
    fetchData()
  },[])

  return (
    <div>Homepage</div>
  )
}

export default Homepage