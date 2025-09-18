import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "@mui/material/styles";

const GetIconComponent = (iconName) => {
  const theme = useTheme();

  const iconMap = {
    LinkedIn: { icon: faLinkedin, color: "#2867b2", fontSize: "20px" },
    GitHub: {
      icon: faGithub,
      color: theme.palette.primary.main,
      fontSize: "20px",
    },
    Instagram: { icon: faInstagram, color: "#E1306C", fontSize: "20px" },
    Medium: { icon: faMedium, color: "#000000", fontSize: "20px" },
  };

  const config = iconMap[iconName];

  return config ? (
    <FontAwesomeIcon
      icon={config.icon}
      style={{ color: config.color, fontSize: config.fontSize }}
    />
  ) : null;
};

export default GetIconComponent;
