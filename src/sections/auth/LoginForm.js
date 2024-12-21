import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import FormProvider from "../../components/hook-form/FormProvider";
import { Eye, EyeSlash } from "phosphor-react";

// Define a custom MUI theme
const theme = createTheme({
  palette: {
    mode: "light", // "light" or "dark" mode
    primary: {
      main: "#1976d2", // Customize primary color
    },
    secondary: {
      main: "#dc004e", // Customize secondary color
    },
  },
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "demo@demo.com",
    password: "demo123",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
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
    <ThemeProvider theme={theme}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <RHFTextField name="email" label="Email address" />

          <RHFTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
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
        </Stack>
        <Stack alignItems="flex-end" sx={{ my: 2 }}>
          <Link
            component={RouterLink}
            to="/auth/reset-password"
            variant="body2"
            color="inherit"
            underline="always"
          >
            Forgot Password?
          </Link>
        </Stack>
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
          Submit
        </Button>
      </FormProvider>
    </ThemeProvider>
  );
};

export default LoginForm;
