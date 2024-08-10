import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% { transform: translateX(-50%) rotate(360deg)}
`;

const move = keyframes`
   0% { transform: rotate(10deg)}
   100% { transform: rotate(-10deg)}

`

export const Loading = styled.span`
    position: relative;
  width: 64px;
  height: 60px;

  &::after{
    content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  background: #000;
  width: 64px;
  height: 32px;
  border-radius: 0 0 50px 50px;
  animation: ${move} 0.5s linear infinite alternate;
  }

  &::before{
    content: '';
  position: absolute;
  left: 50%;
  top: 0;
  background: #FF3D00;
  width: 24px;
  height: 24px;
  transform: translateX(-50%) rotate(0deg);
  animation: ${rotate} 2s linear infinite;
  }
`;




      