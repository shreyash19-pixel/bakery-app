import React, { useState } from 'react';
import axios from 'axios';
import { RegInput, RegisterContainer, RegsiterWrapper, RegButton, RegForm, RegInputWrapper, RegErr } from '../../styles/Register';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const handleChange = (e) => {
        const { email, name, password } = formData;

        const { name: field, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));

        const newErrors = {
            email: !email,
            name: !name,
            password: !password,
        };

        setErrors(newErrors);

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, name, password } = formData;

        const newErrors = {
            email: !email,
            name: !name,
            password: !password,
        };

        setErrors(newErrors);

        if (!email || !name || !password) {
            return;
        }
        else {
            alert("Registed...")
        }

        try {
            // Make your axios request here
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
                </RegForm>
            </RegsiterWrapper>
        </RegisterContainer>
    );
};

export default Login;
