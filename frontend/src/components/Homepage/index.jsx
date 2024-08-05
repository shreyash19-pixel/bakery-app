import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContainer } from "../../styles/Homepage";
import Nav from "../../views/Nav";
import Hero from "../../views/Hero";
import TopProducts from "../../views/TopProducts";
import ExploreMore from "../../views/ExploreMore";
import AboutUs from "../../views/AboutUs";

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const varToken = JSON.parse(token);
        const response = await fetch(
          "http://localhost:5000/api/v1/bakery/homePage",
          {
            headers: { Authorization: `Bearer ${varToken}` },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const data = await response.json();
      } catch (err) {
        console.error("Error fetching data:", err.message);
        if (
          err.message === "No token found" ||
          err.message === "Network response was not ok"
        ) {
          navigate("/login");
        }
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <HomeContainer>
      <Nav />
      <Hero />
      <TopProducts />
      <ExploreMore />
      <AboutUs />
    </HomeContainer>
  );
};

export default Homepage;
