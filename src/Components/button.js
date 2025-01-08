import { Button } from "@mui/material";
import * as Icons from "@mui/icons-material";

function CustomButton({ variant = "contained", color = "primary", children, icon, ...props }) {
  const getIconComponent = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent sx={{ fontSize: "50px" }} /> : null;
  };

  return (
    <Button
      variant={variant}
      color={color}
      disableElevation
      disableFocusRipple
      endIcon={getIconComponent(icon)}
      {...props}
      sx={{
        ...(variant === "outlined" && {
          backgroundColor: "transparent",
          color: "primary.main", // Ensure primary color text for outlined buttons
          border: "1px solid", // Add border for outlined variant
          borderColor: "primary.main",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)", // Light hover effect
            color: "primary.main",
          },
        }),
        ...(variant === "contained" && {
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
            color: "white",
          },
        }),
        textTransform: "none", // Prevent uppercase transformation
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
