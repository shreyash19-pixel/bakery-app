import React from "react";
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


const TopProducts = ({topProducts, firstOrder}) => {

  const baseURL = "http://localhost:1337"

  console.log(topProducts);
  

  return (
    <ProductWrapper id = "top-products">
      <ProductHeadline>Top Products</ProductHeadline>
      <ProductCatalog>
        {topProducts.map((product) => (
          <ProductCard key={product["attributes"].id}>
            <ProductImageWrapper>
              <ProductImage src={`${baseURL}${product["attributes"].ProdImg["data"][0]["attributes"]["url"]}`} alt={product["attributes"].Name} />
              <ProductImageDetails>
                <ProductPrice>{product["attributes"].Price}</ProductPrice>
                <ProductTitle>{product["attributes"].Name}</ProductTitle>
                <AddToCartButton>{product["attributes"].Button}</AddToCartButton>
              </ProductImageDetails>
            </ProductImageWrapper>
          </ProductCard>
        ))}
      </ProductCatalog>
      <ProductBanner>
        <h1>
          {firstOrder.Heading}
        </h1>
        <p>
        {firstOrder.Description}
        </p>
        <ProductButton> {firstOrder.Button}</ProductButton>
      </ProductBanner>
    </ProductWrapper>
  );
};

export default TopProducts;
