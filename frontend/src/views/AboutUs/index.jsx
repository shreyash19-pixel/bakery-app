import React from "react";
import {
  AboutButton,
  AboutUsBanner,
  AboutUsWrapper,
  AboutWrapper,
  AboutCatalog,
  AboutHeadline,
  AboutCard,
  AboutImage,
  AboutTitle,
  AboutPrice,
  AboutImageWrapper,
  AboutImageDetails,
  AddToCartButton,
} from "../../styles/AboutUs";

import Image1 from "../../assests/CatalogImages/Image7.svg";
import Image2 from "../../assests/CatalogImages/Image8.svg";
import Image3 from "../../assests/CatalogImages/Image9.svg";

const demoProducts = [
  {
    title: "Puff Pastry",
    price: "$15",
    description: "Delicious chocolate cake with rich frosting.",
    imageUrl: Image1,
  },
  {
    title: "Doughnut",
    price: "$12",
    description: "Fresh strawberry tart with a crispy crust.",
    imageUrl: Image2,
  },
  {
    title: "Brownies",
    price: "$5",
    description: "Soft and moist blueberry muffin.",
    imageUrl: Image3,
  },
];
const AboutUs = ({aboutUs, featured}) => {

  const baseURL = "http://localhost:1337"
  
  return (
    <AboutWrapper>
      <AboutUsBanner>
        <AboutUsWrapper>
          <h1>{aboutUs.Heading}</h1>
          <p>
            {aboutUs.Description}
          </p>
          <AboutButton>{aboutUs.Button}</AboutButton>
        </AboutUsWrapper>
      </AboutUsBanner>
      <AboutHeadline>{featured["Heading"]}</AboutHeadline>
      <AboutCatalog>
        {featured.products.data.map((Product, index) => (
          <AboutCard key={index}>
            <AboutImageWrapper>
              <AboutImage src={`${baseURL}${Product["attributes"]["ProdImg"]["data"][0]["attributes"]["url"]}`} alt={Product["attributes"]["Name"]} />
              <AboutImageDetails>
                <AboutPrice>{Product["attributes"]["Price"]}</AboutPrice>
                <AboutTitle>{Product["attributes"]["Name"]}</AboutTitle>
                <AddToCartButton>{Product["attributes"]["Button"]}</AddToCartButton>
              </AboutImageDetails>
            </AboutImageWrapper>
          </AboutCard>
        ))}
      </AboutCatalog>
    </AboutWrapper>
  );
};

export default AboutUs;
