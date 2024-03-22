import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import type { FormikValues } from "formik";

const StyledButton = styled(Button)`
  margin: 16px auto;
`;

const genderOptions = ["I don't want to response", "Male", "Female"];

interface Form {
  formik: FormikValues;
  page: "login" | "signup";
}

const Form = ({ formik, page }: Form) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = (
    passwordType: "password" | "confirmPassword",
  ) => {
    const passwordSetters = {
      password: setShowPassword,
      confirmPassword: setShowConfirmPassword,
    };
    passwordSetters[passwordType]((show) => !show);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        margin="dense"
        id="username"
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        fullWidth
        margin="dense"
        id="password"
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword("password")}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        fullWidth
        margin="dense"
        id="confirmPassword"
        name="confirmPassword"
        label="ConfirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword("confirmPassword")}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      />
      {page === "signup" && (
        <TextField
          fullWidth
          select
          margin="dense"
          id="gender"
          name="gender"
          label="Gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
        >
          {genderOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
      <StyledButton color="success" variant="contained" fullWidth type="submit">
        {page === "signup" ? "Register" : "Log in"}
      </StyledButton>
    </form>
  );
};

export default Form;
