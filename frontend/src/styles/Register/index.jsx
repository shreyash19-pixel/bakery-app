import styled from 'styled-components';

export const RegisterContainer = styled.div`
    width: 100%;
    height: 100vh;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RegsiterWrapper = styled.div`
   width: 100%;
   max-width: 500px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
`;

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
    min-height: 60px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const RegInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding : 10px 15px;
`
export const RegErr = styled.p`
    color: red;
`

export const RegButton = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
`
