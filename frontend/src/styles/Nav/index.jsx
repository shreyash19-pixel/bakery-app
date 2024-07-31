import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  z-index: 1;
`;

export const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BakeryLogo = styled.img`
  width: 100px; 
`;

export const Navlink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-right: 70px;

  a {
    color: white;
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #e9bd8c;
    }
  }
`;
export const ProfileIcon = styled(FontAwesomeIcon)`
  color: #e9bd8c;
  font-size: 40px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;
