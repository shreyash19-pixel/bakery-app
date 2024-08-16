import React, { useState } from 'react';

import {
  ExploreWrapper,
  ExportLink,
  ProductCatalog,
  ProductHeadline,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductImageWrapper,
  ProductImageDetails,
  AddToCartButton,
} from '../../styles/ExploreMore';

import Loader from '../../components/Loader';


const ExploreMore = ({ explore }) => {
  const [activeCat, setActiveCat] = useState([explore["Categories"][0]]);
  const [loading, setLoading] = useState(false);

  const setCategory = (cat) => {
    setLoading(true);
    setTimeout(() => {
      setActiveCat([explore["Categories"][cat]]);
      setLoading(false);
    }, 500); 
  };

  // console.log(explore);

  const baseURL = "http://localhost:1337";

  return (
    <ExploreWrapper>
      <ProductHeadline>Explore More</ProductHeadline>
      <ExportLink>
        {explore["Categories"].map((categories, index) => (
          <div key={categories.CategoryType} onClick={() => setCategory(index)}>
            {categories.CategoryType}
          </div>
        ))}
      </ExportLink>
      {loading ? (
        <Loader />
      ) : (
        <ProductCatalog>
          {activeCat.map((product) => (
            <ProductCard key={product.id}>
              {product.products.data.map((prod) => (
                <ProductImageWrapper key={prod.id}>
                  <ProductImage
                    src={`${baseURL}${prod.attributes.ProdImg.data[0].attributes.url}`}
                    alt={prod.attributes.Name}
                  />
                  <ProductImageDetails>
                    <ProductPrice>{prod.attributes.Price}</ProductPrice>
                    <ProductTitle>{prod.attributes.Name}</ProductTitle>
                    <AddToCartButton>{prod.attributes.Button}</AddToCartButton>
                  </ProductImageDetails>
                </ProductImageWrapper>
              ))}
            </ProductCard>
          ))}
        </ProductCatalog>
      )}
    </ExploreWrapper>
  );
};

export default ExploreMore;
