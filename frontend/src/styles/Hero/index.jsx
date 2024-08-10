import styled from "styled-components";
import HomeBackground from "../../assests/HeroImages/HomepageBackground.svg";

export const HeroInfo = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${HomeBackground});
  background-repeat: no-repeat;
  background-size: cover; // Ensure the background covers the container
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding-left: 20px;
  position: relative;

  div{
    z-index: 3;
    padding-top: 30px;

    h1 {
    width: 424px;
    font-size: 60px;
    color: white;
    line-height: 1.2;
    font-family: "Sansita Swashed", system-ui;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;

  }

  p {
    font-size: 40px;
    color: #e9bd8c;
  }
  }

  
`;

export const BackgroundFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const InfoButton = styled.button`
  margin-top: 20px;
  padding: 12px 50px;
  background-color: #933c24;
  color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  
`;
