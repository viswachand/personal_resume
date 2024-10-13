import { Typography } from "@mui/material";
import React from "react";
import DividerCom from "./utilities";
import jsonData from "../Data/Data.json";
import Grid from "@mui/material/Grid2";

function Projects() {
  const { projects } = jsonData;
  return (
    <>
      <Typography variant="h1">Projects</Typography>
      <DividerCom />
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="body2">{project.title}</Typography>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{fontWeight:"700", fontSize:"1.1rem"}}
                >
                  Environment:
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  component="span"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {project.technologies.join(", ")}
                </Typography>
              </Grid>
            </Grid>
            <br/>
            <Typography variant="body1">{project.description}</Typography>
          </Grid>
        ))}
      </Grid>
     
    </>
  );
}

export default Projects;
