import { Grid2 } from "@mui/material";

function CustomGrid({ children, ...props }) {
  return (
    <Grid2 {...props}>
      {children}
    </Grid2>
  );
}

export default CustomGrid;
