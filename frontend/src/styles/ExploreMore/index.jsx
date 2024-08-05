import styled from "styled-components";

export const ExploreWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;

`;

export const ExportLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin-right: 70px;
  border-bottom: 1px solid #c1baba9f;

  a {
    color: #5d5d5d;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    font-weight: 500;
  }
`;