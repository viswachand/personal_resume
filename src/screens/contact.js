import React from "react";
import { useTheme } from "@mui/material";
import { DividerCom } from "../Components/utilities";
import { socialMedia } from "../Data/menu";
import GetIconComponent from "../Components/fontIcons";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";

function Contact() {
  const theme = useTheme();

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
              {GetIconComponent(media.icon)}
            </a>
          </CustomGrid>
        ))}
      </CustomGrid>
    </>
  );
}

export default Contact;
