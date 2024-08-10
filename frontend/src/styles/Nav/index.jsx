import styled, { keyframes } from "styled-components";
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
  z-index: 4;
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

  @media (max-width: 768px) {
    display: none;
  }

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

export const ProfileIconWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProfileIcon = styled(FontAwesomeIcon)`
  color: #e9bd8c;
  font-size: 30px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }

  &:nth-child(2) {
    display: none;
  }

  @media (max-width: 768px) {
    &:nth-child(2) {
      display: flex;
    }
  }
`;


export const ResponsiveNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    height: 100dvh;
    position: absolute;
    z-index: 999;
    background-color: white;
    left: 0;
    top: 0;
    transition: transform .3s ease-in-out;
    transform: ${(props) => (props.nav ? "translate(100%)" : "translate(-100%)")}
  }

  a {
    color: black;
    font-size: 40px;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #e9bd8c;
    }
  }

  div {
    position: absolute;
    right: 25px;
    top: 60px;
    z-index: 4;
    color: black;
  }
`;
