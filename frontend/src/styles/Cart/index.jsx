import {styled} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const CartScrollWrap = styled.div`
  width: 100%;
  max-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  scrollbar-width: none;
`

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 20px;
    min-height: 40px;
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

export const EmptyCartWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  span{
    font-size: 24px;
  }
`

export const CartIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 45px;
`

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