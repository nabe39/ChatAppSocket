import { styled, TextField } from "@mui/material";

const StyleInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
      paddingTop: "12px",
      paddingBottom: "12px",
    },
  }));
  export default StyleInput;