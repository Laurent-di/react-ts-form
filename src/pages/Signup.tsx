import React from "react";
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

const Signup: React.FC = () => {
  const onSubmit = (data: UserValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <StyledWrapper>
      <StyledLForm>
        <Form formik={formik} page="signup" />
      </StyledLForm>
    </StyledWrapper>
  );
};

export default Signup;
