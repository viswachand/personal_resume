
import React from "react";
import DividerCom from "../Components/utilities";
import jsonData from "../Data/Data.json";
import Grid from "@mui/material/Grid2";
import CustomTypography from "../Components/typography";

function Projects() {
  const { projects } = jsonData;
  return (
    <>
      <CustomTypography variant="h1">Projects</CustomTypography>
      <DividerCom />
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomTypography variant="body2">{project.title}</CustomTypography>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <CustomTypography
                  variant="h6"
                  sx={{fontWeight:"700", fontSize:"1.1rem"}}
                >
                  Environment:
                </CustomTypography>
              </Grid>
              <Grid item>
                <CustomTypography
                  variant="body1"
                  component="span"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {project.technologies.join(", ")}
                </CustomTypography>
              </Grid>
            </Grid>
            <br/>
            <CustomTypography variant="body1">{project.description}</CustomTypography>
          </Grid>
        ))}
      </Grid>
     
    </>
  );
}

export default Projects;
