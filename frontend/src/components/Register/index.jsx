import React, { useState } from 'react';
import axios from 'axios';
// import axios from 'axios';
import { RegInput, RegisterContainer, RegsiterWrapper, RegButton, RegForm, RegInputWrapper, RegErr, StyledLink } from '../../styles/Register';

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
    const { name: field, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    setErrors((prevData) => ({
      ...prevData,
      [field]: false,
    }));

    
  };

  const handleBlur = (e) => {
    const { name: field, value } = e.target;
    setErrors((prevData) => ({
      ...prevData,
      [field]: !value,
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
      const response = await axios.post("http://localhost:5000/api/v1/auth/register", { email: email, name: name, password: password });
      const token = response.data.token
      localStorage.setItem("token", JSON.stringify(token))
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
              onBlur={handleBlur}
              isEmpty={errors.email}
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
              onBlur={handleBlur}
              isEmpty={errors.name}
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
              onBlur={handleBlur}
              isEmpty={errors.password}
            />
            {errors.password && <RegErr>Please enter Password</RegErr>}
          </RegInputWrapper>
          <RegButton type="submit">Register</RegButton>
        </RegForm>
        <StyledLink to="/login">
          <p>Already have an account?</p>
          <RegButton>Login</RegButton>
        </StyledLink>
      </RegsiterWrapper>
    </RegisterContainer>
  );
};

export default Register;
