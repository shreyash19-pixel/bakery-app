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
  const { cart, quantities, setQuantities } = useContext(AppContext);
  const baseURL = "http://localhost:1337";

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
      {cart.length > 0 ? (
        cart.map((prods, index) => {
          const price = prods.Price;

          return (
            <CartDetails key={index}>
              <CartDetailsLeft>
                <CartImage src={`${baseURL}${prods.ProdImg}`} />
                <QuantityButton onClick={() => decreaseQuantity(index)}>
                  -
                </QuantityButton>
                <Quantity>{quantities[index]}</Quantity>
                <QuantityButton onClick={() => increaseQuantity(index)}>
                  +
                </QuantityButton>
              </CartDetailsLeft>
              <CartDetailsRight>
                <CartPrice>${(quantities[index] * price).toFixed(2)}</CartPrice>
              </CartDetailsRight>
            </CartDetails>
          );
        })
      ) : (
        <CartDetails>No products in cart</CartDetails>
      )}
    </CartContainer>
  );
};

export default Cart;
