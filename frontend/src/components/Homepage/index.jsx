import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer
} from "../../styles/Homepage";
import Nav from "../../views/Nav";
import Hero from "../../views/Hero";
import TopProducts from "../../views/TopProducts";


const Homepage = () => {
  

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const varToken = JSON.parse(localStorage.getItem("token"));
        const response = await fetch(
          "http://localhost:5000/api/v1/bakery/homePage",
          {
            headers: { Authorization: `Bearer ${varToken}` },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      } catch (err) {
        console.log(err.message);
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  return (
    <HomeContainer>
        <Nav />
      <Hero />
      <TopProducts/>
    </HomeContainer>
  );
};

export default Homepage;