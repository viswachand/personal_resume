import * as Icons from "@mui/icons-material";
import { useTheme } from "@mui/material";
function CustomIcons(iconName) {
  const theme = useTheme();
  const IconComponent = Icons[iconName];

  return IconComponent ? (
    <IconComponent
      style={{ color: theme.palette.primary.light, fontSize: "33px" }}
    />
  ) : null;
}

export default CustomIcons;
