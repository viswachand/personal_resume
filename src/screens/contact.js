import { Typography } from "@mui/material";
import React from "react";
import DividerCom from "./utilities";
import { socialMedia } from "../Data/menu";
import { useTheme, Grid2 } from "@mui/material"; // Changed from Grid2 to Grid for clarity
import * as Icons from "@mui/icons-material";

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
      <Typography variant="h1">Contact</Typography>
      <DividerCom />
      <Typography variant="body1" sx={{ mb: 2 }}>
        Feel free to reach out to me on the details mentioned below.
      </Typography>

      <Grid2 container alignItems="center" spacing={1}>
        <Grid2 item>
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", fontSize: "1.1rem" }}
          >
            Email:
          </Typography>
        </Grid2>
        <Grid2 item>
          {/* Updated email link to be clickable */}
          <a href="mailto:binduc2907@gmail.com">binduc2907@gmail.com</a>
        </Grid2>
      </Grid2>
      <br />

      <Grid2
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography variant="h6" sx={{ fontWeight: "700", fontSize: "1.1rem" }}>
          Follow me:
        </Typography>
        {socialMedia.map((media) => (
          <Grid2 item key={media.id}>
            <a
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 8px" }}
            >
              {getIconComponent(media.icon)}
            </a>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

export default Contact;
