import styled from "styled-components";

export const ExploreWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  padding-inline:12px;

`;

export const ExportLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  border-bottom: 1px solid #c1baba9f;
  cursor: pointer;
  overflow-y: auto;

  div {
    color: #5d5d5d;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    font-weight: 500;
  }
`;


export const ProductHeadline = styled.h1`
  font-size: 50px;
  color: black;
  text-align: center;
  font-family: "Sansita Swashed", system-ui;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
`;

export const ProductCatalog = styled.div`
 
`;

export const ProductCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
  align-items: start;
  overflow: hidden;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
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
`;

export const ProductTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 0;
  font-weight: bold;
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

  &:hover {
    background-color: #0056b3;
  }
`;
