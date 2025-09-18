import { Button } from "@mui/material";
import * as Icons from "@mui/icons-material";

function CustomButton({
  variant = "contained",
  color = "primary",
  children,
  icon,
  ...props
}) {
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
          color: "body.helight",

          "&:hover": {
            backgroundColor: "body.helight",
            color: "body.helight",
          },
        }),
        ...(variant === "contained" && {
          backgroundColor: "body.helight",
          color: "white",
          "&:hover": {
            backgroundColor: "body.helight",
            color: "white",
          },
        }),
        textTransform: "none",
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
