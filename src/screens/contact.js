import React from "react";
import { useTheme } from "@mui/material";
import { DividerCom } from "../Components/utilities";
import { socialMedia } from "../Data/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";

function Contact() {
  const theme = useTheme();

  const getIconComponent = (iconName) => {
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

  return (
    <>
      <CustomTypography variant="h2" color="primary.light">
        Contact
      </CustomTypography>
      <DividerCom />
      <CustomTypography variant="body1" sx={{ mb: 2 }}>
        Feel free to reach out to me on the details mentioned below.
      </CustomTypography>

      <CustomGrid container alignItems="center" spacing={1}>
        <CustomGrid>
          <CustomTypography
            variant="h6"
            sx={{ fontWeight: "700", fontSize: "1.1rem" }}
          >
            Email:
          </CustomTypography>
        </CustomGrid>
        <CustomGrid>
          <a
            href="mailto:viswachand19@gmail.com"
            style={{ color: theme.palette.body.helight }}
          >
            viswachand19@gmail.com
          </a>
        </CustomGrid>
      </CustomGrid>
      <br />

      <CustomGrid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <CustomTypography
          variant="h6"
          sx={{ fontWeight: "700", fontSize: "1.1rem" }}
        >
          Follow me:
        </CustomTypography>
        {socialMedia.map((media) => (
          <CustomGrid key={media.id}>
            <a
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 5px" }}
            >
              {getIconComponent(media.icon)}
            </a>
          </CustomGrid>
        ))}
      </CustomGrid>
    </>
  );
}

export default Contact;
