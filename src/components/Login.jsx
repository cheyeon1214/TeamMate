import styled from "styled-components";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAuthData } from "../store/authSlice";

const Login = () => {
  const { email, password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = () => {
    console.log(email, password); // 아이디, 패스워드 백엔드로 보내줌
    dispatch(setAuthData({ email, password}));
  }

  return (
    <>
      <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="아이디" />
      <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="비밀번호" />
      <ButtonWrapper>
        <Button text="로그인" onClick={handleSubmit}></Button>
      </ButtonWrapper>
    </>
  );
};

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  padding: 20px;
  margin: 8px 0;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
`;

export default Login;