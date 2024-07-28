import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { RegInput, RegisterContainer, RegsiterWrapper, RegButton, RegForm, RegInputWrapper, RegErr } from '../../styles/Register';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    name: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

    try {
      // Make your axios request here
      // Assuming registration is successful:
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
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <RegErr>Please enter Name</RegErr>}
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
          <RegButton type="submit">Register</RegButton>
        </RegForm>
        <Link to="/login">
          <p>Already have an account?</p>
          <RegButton>Login</RegButton>
        </Link>
      </RegsiterWrapper>
    </RegisterContainer>
  );
};

export default Register;