import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartContainer = styled.div`
  width: 100%;
  max-width: 350px;
  max-height: 100dvh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: #e9bd8c;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 4;
`;

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 20px;
  }
`;

export const CrossIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 30px; 
  cursor: pointer;

  &:hover {
    color: #cc0000; 
  }
`;

export const CartDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;
export const CartDetailsLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CartImage = styled.img`
  width: 50px;
`;

export const CartDetailsRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px 10px;
  margin: 0 5px;

  &:hover {
    background-color: white;
  }
`;

export const Quantity = styled.span`
  font-size: 18px;
  margin: 0 10px;
`;

export const CartPrice = styled.div`
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
`;