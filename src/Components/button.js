import { Button } from "@mui/material";
import * as Icons from "@mui/icons-material";

function CustomButton({ variant, color, children, icon, align, ...props }) {
  const getIconComponent = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent sx={{ fontSize: "50px" }} /> : null;
  };
  return (
    <>
      <Button
        variant={variant}
        color={color}
        disableElevation
        disableFocusRipple
        endIcon={getIconComponent(icon)}
        {...props}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

export default CustomButton;
