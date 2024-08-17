
import styled from "styled-components";

export const DescContainer = styled.div`
    width:100%;
    /* max-width:1950px; */
    height:100vh;
    display:flex;
    /* background-color:rgb(105,219,124); */
`

export const DescWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between ;
    align-items:center;
    margin: 10px 10px;
    
    /* background-color:rgb(255, 169, 77); */
`
export const DescImgWrapper = styled.div`
    height:100%;
    width:100%;
    padding-inline:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    /* background-color:rgb(255, 212, 59); */
    gap:10px;
    border-radius:10px;

`

export const ImgWrapper = styled.div`
    /* max-width:500p; */
    width:50%;
    height:95%;
    /* background-color:rgb(224, 49, 49); */
    padding:10px;
    border-radius:10px;
`
export const DescImgWrapper1 = styled.div`
    width:50%;
    height:95%;
    display:flex;
    flex-direction:column;
    padding:10px;
    justify-content:space-around;
    align-items:center;
    /* background-color:rgb(104, 77, 65); */
    border-radius:10px;

`
export const Description = styled.h1`
    height: 100%;
    width:100%;
    max-height:350px;
    padding: 12px 20px;
    box-sizing: border-box;
    /* border: 2px solid #ccc; */
    border-radius: 4px;
    /* background-color: #f8f8f8; */
    font-family: 'Josefin Sans';
    font-size: 40px;
    resize: none; 
`

export const ButtonWrapper = styled.div`
    display:flex;
    border-radius:10px;
    justify-content:center;
    align-items:center;
    height:10%;
    width:100%;
    /* background-color: green; */
`

export const Buy = styled.button`
    height:80%;
    width:80%;
    border-radius: 32px;
    font-family: 'Josefin Sans';
    font-size:25px;
    background-color:#FBC400;
`

export const Review = styled.div`
    width:100%;
    height:100%;
    max-height:80px;
    /* background-color:rgb(77, 171, 247); */
    border-radius:10px;

`
export const OtherProducts = styled.div`
    width:100%;
    height:100%;
    max-height:150px;
    /* background-color:rgb(77, 171, 247); */
    border-radius:10px;
`

export const DescProduct = styled.div`
    width:100%;
    height:100%;
    max-height:200px;
    /* background-color:rgb(77, 171, 247); */
    border-radius:10px;

`
export const Img = styled.img`
    /* margin: -40px 0px 0px -120px; */
    width:100%;
    height:100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* overflow: ; */
    object-fit:cover;
    object-position:25% 25%;

`