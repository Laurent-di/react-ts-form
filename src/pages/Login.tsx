import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Form from "../components/Form";
import { validationSchema } from "../schemas/validationForm";

import { useFormik } from "formik";

const StyledWrapper = styled("div")`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLForm = styled("div")`
  max-width: 330px;
  background: white;
  padding: 20px;
`;

type UserValues = {
  username: string;
  gender: string;
  password: string;
  confirmPassword: string;
};

const initialValues = {
  username: "",
  gender: "",
  password: "",
  confirmPassword: "",
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = (data: UserValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Button variant="contained" onClick={() => navigate("/signup")}>
        Go to the register
      </Button>
      <StyledWrapper>
        <StyledLForm>
          <Form formik={formik} page="login" />
        </StyledLForm>
      </StyledWrapper>
    </>
  );
};

export default Login;
