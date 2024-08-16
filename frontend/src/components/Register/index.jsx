import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import axios from 'axios';
import {
  RegInput,
  RegisterContainer,
  RegsiterWrapper,
  RegButton,
  RegForm,
  RegInputWrapper,
  RegErr,
  StyledLink,
  PasswordIcon,
  PasswordIconWrap,
} from "../../styles/Register";

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false)
  const [focused, setFocused] = useState(false)
  const [userExist, setUserExist] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
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
  
  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = (e) => {
    setFocused(false)
    const { name: field, value } = e.target;
    setErrors((prevData) => ({
      ...prevData,
      [field]: !value,
    }));
  };

  const showPassword = (e) => {
    e.stopPropagation()
    setShowPass(!showPass)

  }

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
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        { email: email, name: name, password: password }
      );
      if (response.status === 201) {
        const token = response.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        navigate("/login");
      }
    } catch (error) {
      setUserExist(error.response.data)
    }

   
    
  };

  return (
    <RegisterContainer>
      <RegsiterWrapper>
      <div>{userExist}</div>
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
              type= {showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              isEmpty={errors.password}
            />
            <PasswordIconWrap onClick={showPassword}>
              {showPass ? <PasswordIcon focused = {focused} icon = {faEyeSlash} /> : <PasswordIcon focused = {focused} icon = {faEye} />}
            </PasswordIconWrap>
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
