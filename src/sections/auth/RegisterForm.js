import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { RHFTextField } from "../../components/hook-form";
import FormProvider from "../../components/hook-form/FormProvider";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "demo@demo.com",
    password: "demo123",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // Submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextField name="firstName" lable="First Name" />
          <RHFTextField name="lastName" lable="Last Name" />
        </Stack>
        <RHFTextField name="email" lable="Email" />
        <RHFTextField
          name="password"
          type={showPassword ? "text" : "password"}
          lable="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  color="default" // Explicitly set the color (e.g., "primary", "default", or "inherit")
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          color="primary"
          variant="contained"
          size="large"
          type="submit"
          sx={{
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
          }}
        >
          Create Account
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
