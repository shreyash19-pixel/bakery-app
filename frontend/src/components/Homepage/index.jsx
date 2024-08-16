import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContainer } from "../../styles/Homepage";
import Nav from "../../views/Nav";
import Hero from "../../views/Hero";
import TopProducts from "../../views/TopProducts";
import ExploreMore from "../../views/ExploreMore";
import AboutUs from "../../views/AboutUs";
import useFetch from "../../hooks/useFetch";
import Footer from "../Footer";
import Cart from "../../views/Cart";

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

  const url = "http://localhost:1337/api/homepage?populate=deep,10"
  const {data, loading, error} = useFetch(url)

  if(loading) return <div>Loading....</div>
  if(error) return <div>{error}</div>

  const banner = data["attributes"]["HomePage"][0] 
  const topProducts = data["attributes"]["HomePage"][1]["products"]["data"] 
  const firstOrder = data["attributes"]["HomePage"][2]
  const explore = data["attributes"]["HomePage"][3]
  const aboutUs = data["attributes"]["HomePage"][4]
  const featured = data["attributes"]["HomePage"][5]
  const logo = data["attributes"]["Logo"]["data"][0]["attributes"]["url"]
  const navLinks = data["attributes"]["Navlinks"]

  

  return (
    <HomeContainer>
      <Nav logo = {logo} navLinks = {navLinks}  />
      <Hero banner = {banner} />
      <TopProducts topProducts = {topProducts} firstOrder = {firstOrder} />
      <ExploreMore explore = {explore}  />
      <AboutUs aboutUs = {aboutUs} featured = {featured} />
      <Footer />
      <Cart/>
    </HomeContainer>
  );
};

export default Homepage;
