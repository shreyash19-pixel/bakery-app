import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RegisterBackground from '../../assests/HeroImages/registerBackground.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RegisterContainer = styled.div`
    width: 100%;
    height: 100vh;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${RegisterBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-inline: 12px;
`


export const RegsiterWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    padding: 30px;
    text-align: center;

    div:first-child{
        color: red;
        margin-bottom: 20px;
        min-height: 20px;
    }

    `

export const RegForm = styled.form`
    width: 100%;
    height: 100%;
    padding-inline: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const RegInputWrapper = styled.div`
    width: 100%;
    min-height: 79px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
`;

export const RegInput = styled.input`
   width: 100%;
    height: 45px;
    border: 1px solid ${(props) => (props.isEmpty ? "red" : "#ccc")};
    border-radius: 10px;
    padding: 10px 15px;
    font-size: 16px;
    background : none;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s, box-shadow 0.3s;
    

    &:focus {
        border-color: #007BFF;
        background-color: #ffffff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
        outline: none;
    };
`

export const PasswordIconWrap = styled.span`
    position: absolute;
    right: 20px;
    top: 12px;
`

export const PasswordIcon = styled(FontAwesomeIcon)`
    color: ${(props) => (props.focused ? "black" : "white")};
    cursor: pointer;
`   

export const RegErr = styled.p`
    color: red;
`

export const RegButton = styled.button`
    width: 100%;
    height: 45px;
    background : none;
    color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: #0056b3;
        box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
    }
`
export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #007BFF;
    margin-top: 20px;

    &:hover {
        color: #0056b3;
    }

    p {
        margin: 0 0 10px 0;
        font-size: 16px;
    }
`;
