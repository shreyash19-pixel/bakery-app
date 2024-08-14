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
  const { cart, setCart, setQuantities } = useContext(AppContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const addToCart = (id) => {
    const { Name, Price } = topProducts[id]["attributes"];
    const ProdImg =
      topProducts[id]["attributes"]["ProdImg"]["data"][0]["attributes"]["url"];

    const isProductExists = cart.find((prod) => prod.Name === Name);

    if (!isProductExists) {
      setCart((prevCart) => {
        const newCart = [...prevCart, { Name, Price, ProdImg, quantity: 1 }];
        setQuantities(newCart.map((prod) => prod.quantity));
        return newCart;
      });
    } else {
      setCart((prevCart) =>
        prevCart.map((prod) =>
          prod.Name === Name ? { ...prod, quantity: prod.quantity + 1 } : prod
        )
      );
      setQuantities((prevQuantities) =>
        prevQuantities.map((quantity, i) =>
          cart[i].Name === Name ? quantity + 1 : quantity
        )
      );
    }
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
                <ProductPrice>${product["attributes"].Price}</ProductPrice>
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
