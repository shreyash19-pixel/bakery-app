import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  RegInput,
  RegisterContainer,
  RegsiterWrapper,
  RegButton,
  RegForm,
  RegInputWrapper,
  RegErr,
  StyledLink,
  PasswordIconWrap,
  PasswordIcon,
} from "../../styles/Register";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused] = useState(false);
  const [credsErr, setCredsErr] = useState("")

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
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

  const showPassword = (e) => {
    e.stopPropagation()
    setShowPass(!showPass)

  }

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e) => {
    setFocused(false);
    const { name: field, value } = e.target;
    setErrors((prevData) => ({
      ...prevData,
      [field]: !value,
    }));
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

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        { email: email, password: password }
      );
      
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        navigate("/homePage");
      }
    } catch (error) {
      setCredsErr(error.response.data);
      
    }
  };

  return (
    <RegisterContainer>
      <RegsiterWrapper>
        <RegForm onSubmit={handleSubmit}>
            <div style = {{color : "red", minHeight : "30px"}}>{credsErr}</div>
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
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              isEmpty={errors.password}
            />
            <PasswordIconWrap onClick={showPassword}>
              {showPass ? (
                <PasswordIcon focused={focused} icon={faEyeSlash} />
              ) : (
                <PasswordIcon focused={focused} icon={faEye} />
              )}
            </PasswordIconWrap>
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
