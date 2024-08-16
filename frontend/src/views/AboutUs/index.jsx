import React, { useContext, useEffect } from "react";
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
import { AppContext } from "../../ContextApi/AppContext";

const AboutUs = ({ aboutUs, featured }) => {
  const baseURL = "http://localhost:1337";
  const { cart, setCart } = useContext(AppContext);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addTocart = (id) => {
    const prodCart = document.querySelector(".show-cart");
    prodCart.classList.add("openCart");

    const { Name, Price } = featured.products.data[id]["attributes"];

    const ProdImg =
      featured.products.data[id]["attributes"]["ProdImg"]["data"][0][
        "attributes"
      ]["url"];

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
    <AboutWrapper id="aboutus">
      <AboutUsBanner>
        <AboutUsWrapper>
          <h1>{aboutUs.Heading}</h1>
          <p>{aboutUs.Description}</p>
          <AboutButton>{aboutUs.Button}</AboutButton>
        </AboutUsWrapper>
      </AboutUsBanner>
      <AboutHeadline>{featured["Heading"]}</AboutHeadline>
      <AboutCatalog>
        {featured.products.data.map((Product, index) => (
          <AboutCard key={index}>
            <AboutImageWrapper>
              <AboutImage
                src={`${baseURL}${Product["attributes"]["ProdImg"]["data"][0]["attributes"]["url"]}`}
                alt={Product["attributes"]["Name"]}
              />
              <AboutImageDetails>
                <AboutPrice>{Product.attributes.Price}</AboutPrice>
                <AboutTitle>{Product.attributes.Name}</AboutTitle>
                <AddToCartButton onClick={() => addTocart(index)}>
                  {Product["attributes"].Button}
                </AddToCartButton>
              </AboutImageDetails>
            </AboutImageWrapper>
          </AboutCard>
        ))}
      </AboutCatalog>
    </AboutWrapper>
  );
};

export default AboutUs;
