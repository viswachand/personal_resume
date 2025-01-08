import React from "react";
import {DividerCom} from "../Components/utilities";
import { socialMedia } from "../Data/menu";
import { useTheme } from "@mui/material"; // Changed from Grid2 to Grid for clarity
import * as Icons from "@mui/icons-material";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";

function Contact() {
  const theme = useTheme();

  const getIconComponent = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? (
      <IconComponent
        style={{ color: theme.palette.primary.main, fontSize: "33px" }}
      />
    ) : null;
  };

  return (
    <>
      <CustomTypography variant="h1">Contact</CustomTypography>
      <DividerCom />
      <CustomTypography variant="body1" sx={{ mb: 2 }}>
        Feel free to reach out to me on the details mentioned below.
      </CustomTypography>

      <CustomGrid container alignItems="center" spacing={1}>
        <CustomGrid >
          <CustomTypography
            variant="h6"
            sx={{ fontWeight: "700", fontSize: "1.1rem" }}
          >
            Email:
          </CustomTypography>
        </CustomGrid>
        <CustomGrid >
          {/* Updated email link to be clickable */}
          <a href="mailto:viswachand19@gmail.com">viswachand19@gmail.com</a>
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
          <CustomGrid  key={media.id}>
            <a
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 8px" }}
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
