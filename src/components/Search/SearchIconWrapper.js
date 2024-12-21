import { styled } from "@mui/material/styles";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    color: theme.palette.grey[500],
    width: 18, // Adjust the size as needed
    height: 18, // Adjust the size as needed
  },
}));

export default SearchIconWrapper;
