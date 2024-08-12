import React, { useState, useContext, useEffect } from "react";
import {
  ProductWrapper,
  ProductCatalog,
  ProductHeadline,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductImageWrapper,
  ProductImageDetails,
  AddToCartButton,
  ProductBanner,
  ProductButton,
} from "../../styles/TopProducts";
import { AppContext } from "../../ContextApi/AppContext";


const TopProducts = ({ topProducts, firstOrder }) => {
  const baseURL = "http://localhost:1337";
  const { cart, setCart } = useContext(AppContext);
  
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // }, [cart]);
  const addToCart = (id) => {
    const selectedProduct = topProducts[id];
    setCart((prevCart) => [...prevCart, selectedProduct]);
  };


  return (
    <ProductWrapper id="top-products">
      <ProductHeadline>Top Products</ProductHeadline>
      <ProductCatalog>
        {topProducts.map((product, index) => (
          <ProductCard key={product["attributes"].id}>
            <ProductImageWrapper>
              <ProductImage
                src={`${baseURL}${product["attributes"].ProdImg["data"][0]["attributes"]["url"]}`}
                alt={product["attributes"].Name}
              />
              <ProductImageDetails>
                <ProductPrice>{product["attributes"].Price}</ProductPrice>
                <ProductTitle>{product["attributes"].Name}</ProductTitle>
                <AddToCartButton onClick={() => addToCart(index)}>
                  {product["attributes"].Button}
                </AddToCartButton>
              </ProductImageDetails>
            </ProductImageWrapper>
          </ProductCard>
        ))}
      </ProductCatalog>
      <ProductBanner>
        <h1>{firstOrder.Heading}</h1>
        <p>{firstOrder.Description}</p>
        <ProductButton> {firstOrder.Button}</ProductButton>
      </ProductBanner>
    </ProductWrapper>
  );
};

export default TopProducts;
