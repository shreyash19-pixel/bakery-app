import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { RegInput, RegisterContainer, RegsiterWrapper, RegButton, RegForm, RegInputWrapper, RegErr, StyledLink } from '../../styles/Register';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const handleChange = (e) => {
        const { email, password } = formData;

        const { name: field, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));

        const newErrors = {
            email: !email,
            password: !password,
        };

        setErrors(newErrors);

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = formData;

        const newErrors = {
            email: !email,
            password: !password,
        };

        setErrors(newErrors);

        if (!email || !password) {
            return;
        }
        else {
            alert("Registed...")
        }

        try {
            const response = await axios.post("http://localhost:5000/api/v1/auth/login", { email: email, password: password })
                if (response.status === 200)
                {
                    const token = response.data.token
                    localStorage.setItem("token", JSON.stringify(token))
                    navigate('/homePage')
                }
            
            console.log(response);
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <RegisterContainer>
            <RegsiterWrapper>
                <RegForm onSubmit={handleSubmit}>
                    <RegInputWrapper>
                        <RegInput
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <RegErr>Please enter Email</RegErr>}
                    </RegInputWrapper>
                    <RegInputWrapper>
                        <RegInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <RegErr>Please enter Password</RegErr>}
                    </RegInputWrapper>
                    <RegButton type="submit">Login</RegButton>
                    <StyledLink to="/">
                        <p>Don't have an account?</p>
                        <RegButton>Register</RegButton>
                    </StyledLink>
                </RegForm>
                
            </RegsiterWrapper>
        </RegisterContainer>
    );
};

export default Login;
