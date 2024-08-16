import React, { useContext} from "react";
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
  CartScrollWrap,
  EmptyCartWrap,
  CartIcon,
} from "../../styles/Cart";
import { faTimes, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../ContextApi/AppContext";

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);
  const baseURL = "http://localhost:1337";

  const increaseQuantity = (index) => {

    setCart(
      cart.map((prod, i) =>
        i === index ? { ...prod, Quantity: prod.Quantity + 1 } : prod
      )
    );
  };

  const decreaseQuantity = (index) => {
    
    setCart(
      cart
        .map((prod, i) =>
          i === index ? { ...prod, Quantity: prod.Quantity - 1 } : prod
        )
        .filter((prod) => prod.Quantity > 0)
    );
  };

  const formatPrice = (price) => {
    let prodPrice = price.slice(1);
    prodPrice = parseInt(prodPrice);
    return prodPrice;
  };

  const closeCart = () => {
    const prodCart = document.querySelector(".show-cart");
    prodCart.classList.remove("openCart");
  };

  return (
    <div className="show-cart">
      <CartScrollWrap>
        <CartHeader>
          <h3>ORDER</h3>
          <CrossIcon icon={faTimes} onClick={closeCart} />
        </CartHeader>
        {cart.length > 0 ? (
          cart.map((prods, index) => {
            return (
              <CartDetails key={index}>
                <CartDetailsLeft>
                  <CartImage src={`${baseURL}${prods.ProdImg}`} />
                  <QuantityButton onClick={() => decreaseQuantity(index)}>
                    -
                  </QuantityButton>
                  <Quantity>{prods.Quantity}</Quantity>
                  <QuantityButton onClick={() => increaseQuantity(index)}>
                    +
                  </QuantityButton>
                </CartDetailsLeft>
                <CartDetailsRight>
                  <CartPrice>{`$${
                    prods.Quantity * formatPrice(prods.Price).toFixed(2)
                  }`}</CartPrice>
                </CartDetailsRight>
              </CartDetails>
            );
          })
        ) : (
          <EmptyCartWrap>
            <CartIcon icon={faCartShopping} />
            <span>No Product in the Cart</span>
          </EmptyCartWrap>
        )}
      </CartScrollWrap>
    </div>
  );
};

export default Cart;
