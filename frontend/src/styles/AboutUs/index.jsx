import styled from "styled-components";
import AboutUs from "../../assests/AboutUs.svg";

export const AboutWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 100px;
`;

export const AboutUsBanner = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url(${AboutUs});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
`;

export const AboutUsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  z-index: 1;

  h1 {
    color: #e9bd8c;
    font-size: 45px;
    font-family: "Sansita Swashed", system-ui;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    text-align: right;
    line-height: 1.1;
    letter-spacing: 2.8px;
  }

  p {
    color: white;
    font-size: 20px;
    max-width: 300px;
    text-align: center;
  }
`;

export const AboutButton = styled.button`
  margin-top: 10px;
  padding: 12px 50px;
  background-color: #933c24;
  color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const AboutHeadline = styled.h1`
  font-size: 50px;
  color: black;
  text-align: center;
  font-family: "Sansita Swashed", system-ui;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
`;

export const AboutCatalog = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-items: center;
  align-items: start;
  overflow: hidden;
  padding: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    padding:0px;
  }
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const AboutImage = styled.img`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

export const AboutImageDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  padding: 10px;
  text-align: left;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AboutTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  margin: 0;
`;

export const AboutPrice = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 0;
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  background-color: #933c24;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 7px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  opacity: 0.8;

  &:hover {
    background-color: #0056b3;
  }
`;
