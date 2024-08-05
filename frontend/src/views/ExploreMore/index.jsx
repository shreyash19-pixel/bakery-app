import React from 'react'

import {
  ProductCatalog,
  ProductHeadline,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductImageWrapper,
  ProductImageDetails,
  AddToCartButton,
} from "../../styles/TopProducts";

import Image1 from "../../assests/CatalogImages/Image1.jpg";
import Image2 from "../../assests/CatalogImages/Image2.jpg";
import Image3 from "../../assests/CatalogImages/Image3.jpg";
import Image4 from "../../assests/CatalogImages/Image4.jpg";
import Image5 from "../../assests/CatalogImages/Image5.jpg";
import Image6 from "../../assests/CatalogImages/Image6.jpg";
import { ExploreWrapper, ExportLink } from '../../styles/ExploreMore';

const demoProducts = [
  {
    title: "Honeycomb Bread",
    price: "$15",
    description: "Delicious chocolate cake with rich frosting.",
    imageUrl: Image1,
  },
  {
    title: "Danish Pastry with Fruits",
    price: "$12",
    description: "Fresh strawberry tart with a crispy crust.",
    imageUrl: Image2,
  },
  {
    title: "Seeded Baguette",
    price: "$5",
    description: "Soft and moist blueberry muffin.",
    imageUrl: Image3,
  },
  {
    title: "Round Rustic Bread",
    price: "$10",
    description: "Tangy and sweet lemon pie.",
    imageUrl: Image4,
  },
  {
    title: "Focaccia with Unique Cut Design",
    price: "$10",
    description: "Tangy and sweet lemon pie.",
    imageUrl: Image5,
  },
  {
    title: "Seeded Roll",
    price: "$10",
    description: "Tangy and sweet lemon pie.",
    imageUrl: Image6,
  },
];

 const Links = [
   { id: "#Cake", name: "Cake" },
   { id: "#Muffin", name: "Muffin" },
   { id: "#Croissant", name: "Croissant" },
   { id: "#Bread", name: "Bread" },
   { id: "#Tart", name: "Tart" },
 ];

const ExploreMore = () => {
  return (
    <ExploreWrapper>
      <ProductHeadline>Explore More</ProductHeadline>
      <ExportLink>
        {Links.map((link, index) => (
          <a href={link.id} key={index}>
            {link.name}
          </a>
        ))}
      </ExportLink>
      <ProductCatalog>
        {demoProducts.map((product, index) => (
          <ProductCard key={index}>
            <ProductImageWrapper>
              <ProductImage src={product.imageUrl} alt={product.title} />
              <ProductImageDetails>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductTitle>{product.title}</ProductTitle>
                <AddToCartButton>Add to Cart</AddToCartButton>
              </ProductImageDetails>
            </ProductImageWrapper>
          </ProductCard>
        ))}
      </ProductCatalog>
    </ExploreWrapper>
  );
};

export default ExploreMore