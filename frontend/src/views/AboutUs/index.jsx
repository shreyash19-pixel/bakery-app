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
const AboutUs = () => {
  return (
    <AboutWrapper>
      <AboutUsBanner>
        <AboutUsWrapper>
          <h1>About Us</h1>
          <p>
            Our artisan breads, pastries, and cakes are made with care and
            creativity, ensuring every bite is a delightful experience. Whether
            you're stopping by for a treat or celebrating a special moment,
            Keithston is here to make your day a little sweeter.
          </p>
          <AboutButton>Read More</AboutButton>
        </AboutUsWrapper>
      </AboutUsBanner>
      <AboutHeadline>Featured Treats</AboutHeadline>
      <AboutCatalog>
        {demoProducts.map((Product, index) => (
          <AboutCard key={index}>
            <AboutImageWrapper>
              <AboutImage src={Product.imageUrl} alt={Product.title} />
              <AboutImageDetails>
                <AboutPrice>{Product.price}</AboutPrice>
                <AboutTitle>{Product.title}</AboutTitle>
                <AddToCartButton>Add to Cart</AddToCartButton>
              </AboutImageDetails>
            </AboutImageWrapper>
          </AboutCard>
        ))}
      </AboutCatalog>
    </AboutWrapper>
  );
};

export default AboutUs;
