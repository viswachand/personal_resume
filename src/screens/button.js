import { Button } from "@mui/material";
import * as Icons from "@mui/icons-material";

function ButtonText({ title, icon }) {
  const getIconComponent = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent sx={{ fontSize: "50px" }} /> : null;
  };
  return (
    <>
      <Button
        variant="contained"
        disableElevation
        disableFocusRipple
        endIcon={getIconComponent(icon)}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
      >
        {title}
      </Button>
    </>
  );
}

export default ButtonText;
