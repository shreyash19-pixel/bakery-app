import React, { useContext, useState } from "react";

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
} from "../../styles/ExploreMore";

import Loader from "../../components/Loader";
import { AppContext } from "../../ContextApi/AppContext";
import { Quantity } from "../../styles/Cart";

const ExploreMore = ({ explore }) => {
  const [activeCat, setActiveCat] = useState([explore["Categories"][0]]);
  const [loading, setLoading] = useState(false);
  const { cart, setCart } = useContext(AppContext);

  const setCategory = (cat) => {
    setLoading(true);
    setTimeout(() => {
      setActiveCat([explore["Categories"][cat]]);
      setLoading(false);
    }, 500);
  };

  const baseURL = "http://localhost:1337";

  const addToCart = (i, j) => {
    
    const prodCart = document.querySelector(".show-cart");
    prodCart.classList.add("openCart");
    const { Name, Price } =
      explore["Categories"][i]["products"]["data"][j]["attributes"];

    const ProdImg =
      explore["Categories"][i]["products"]["data"][j]["attributes"]["ProdImg"][
        "data"
      ][0]["attributes"]["url"];

    const isProductExists = cart.find((prod) => prod.Name === Name);

    if (!isProductExists) {
      setCart([...cart, { Name, Price, ProdImg, Quantity: 1 }]);
    } else {
      setCart(
        cart.map((prod) =>
          prod.Name === Name ? { ...prod, Quantity: prod.Quantity + 1 } : prod
        )
      );
    }
  };

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
              {product.products.data.map((prod, j) => (
                <ProductImageWrapper key={prod.id}>
                  <ProductImage
                    src={`${baseURL}${prod.attributes.ProdImg.data[0].attributes.url}`}
                    alt={prod.attributes.Name}
                  />
                  <ProductImageDetails>
                    <ProductPrice>{prod.attributes.Price}</ProductPrice>
                    <ProductTitle>{prod.attributes.Name}</ProductTitle>
                    <AddToCartButton onClick={() => addToCart((product.id)-1, j)}>
                      {prod.attributes.Button}
                    </AddToCartButton>
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
