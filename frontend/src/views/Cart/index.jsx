import React, { useContext, useState, useEffect } from "react";
import {
  CartContainer,
  CartDetails,
  CartDetailsLeft,
  CartDetailsRight,
  CartHeader,
  CrossIcon,
  QuantityButton,
  Quantity,
  CartImage,
  CartPrice,
} from "../../styles/Cart";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../ContextApi/AppContext";

const Cart = () => {
  const { cart ,quantities, setQuantities} = useContext(AppContext);
  const baseURL = "http://localhost:1337";

  // useEffect(() => {
  //   setQuantities(cart.map(() => 1));
    
  // }, [cart]);

  const formatPrice = (price) => {

    let prodPrice = price.slice(1,)
    prodPrice = parseInt(prodPrice)
    return prodPrice

  }

  const increaseQuantity = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? quantity + 1 : quantity
      )
    );
  };

  const decreaseQuantity = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index && quantity > 0 ? quantity - 1 : quantity
      )
    );
  };

  return (
    <CartContainer>
      <CartHeader>
        <h3>ORDER</h3>
        <CrossIcon icon={faTimes} />
      </CartHeader>
      {/* {cart.length > 0 ? (
        cart.map((prods, index) => (
          <CartDetails key={index}>
            <CartDetailsLeft>
              <CartImage
                src={`${baseURL}${prods["attributes"]["ProdImg"]["data"][0]["attributes"]["url"]}`}
              />
              <QuantityButton onClick={() => decreaseQuantity(index)}>
                -
              </QuantityButton>
              <Quantity>{quantities[index]}</Quantity>
              <QuantityButton onClick={() => increaseQuantity(index)}>
                +
              </QuantityButton>
            </CartDetailsLeft>
            <CartDetailsRight>
              <CartPrice>
                ${(quantities[index] * formatPrice(prods["attributes"]["Price"])).toFixed(2)}
              </CartPrice>
            </CartDetailsRight>
          </CartDetails>
        ))
      ) : (
        <CartDetails>No products in cart</CartDetails>
      )} */}
    </CartContainer>
  );
};

export default Cart;
