import styled from "styled-components";
import ProjectBanner from "../../assests/ProductBanner.jpg";

export const ProductWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

export const ProductHeadline = styled.h1`
  font-size: 50px;
  color: black;
  text-align: center;
  font-family: "Sansita Swashed", system-ui;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;

  @media (max-width: 480px)
  {
    font-size: 35px;
  }
`;

export const ProductCatalog = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
  align-items: start;
  overflow: hidden;
  padding: 20px;

  @media (max-width: 768px)
  {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const ProductImage = styled.img`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

export const ProductImageDetails = styled.div`
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

  @media (max-width: 480px)
  {
    gap: 10px;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  margin: 0;

  @media (max-width: 480px)
  {
    font-size: 15px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 0;
  font-weight: bold;

  
  @media (max-width: 480px)
  {
    font-size: 15px;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #933C24;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 7px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  opacity: 0.8;

  
  @media (max-width: 480px)
  {
    font-size: 12px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProductBanner = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url(${ProjectBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-block: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  h1 {
    width: 309px;
    color: #933c24;
    font-size: 40px;
    font-family: "Sansita Swashed", system-ui;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    z-index: 1;
    text-align: center;
    line-height: 1.2;
    letter-spacing: 2.8px;
  }

  p {
    color: white;
    font-size: 20px;
    z-index: 1;
  }
  `

  export const ProductButton = styled.button`
  margin-top: 10px;
  padding: 12px 50px;
  background-color: #933c24;
  color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1;
`;