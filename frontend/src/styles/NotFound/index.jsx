import styled from "styled-components";
import BackgroundImg from "../../assests/page-not-found.jpg";

export const NotFoundWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavToHomeWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: flex-start;
  padding-inline: 12px;
  z-index: 3;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const NavToHome = styled.div`
  display: flex;
`;

export const NotFoundStatusCode = styled.div`
  border-right: 3px solid white;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px)
  {
    padding-right: 20px;
  }
`;

export const StatusCode = styled.h1`
  color: white;
  font-size: 120px;

  @media (max-width: 768px) {
    font-size: 70px;
  }
`;

export const NotFoundTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 40px;
  justify-content: center;

  @media (max-width: 768px)
  {
    padding-left: 20px;
  }

  p {
    color: white;
    font-size: 50px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  button {
    background-color: #ff5724;
    border: none;
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    &:hover {
      background-color: #e46e4a;
    }
  }
`;
