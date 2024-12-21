import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import FormProvider from "../../components/hook-form/FormProvider";

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

const ResetPasswordForm = () => {
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const defaultValues = {
    email: "demo@demo.com",
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
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
          <Button
            fullWidth
            color="inherit"
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
            Send Request
          </Button>
        </Stack>
      </FormProvider>
    </ThemeProvider>
  );
};

export default ResetPasswordForm;
