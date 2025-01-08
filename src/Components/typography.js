import MuiTypography from "@mui/material/Typography";

function CustomTypography({ variant, color, children, align, ...props }) {
  return (
    <MuiTypography
      variant={variant}
      color={color}
      align={align} 
      {...props}
    >
      {children}
    </MuiTypography>
  );
}

export default CustomTypography;
