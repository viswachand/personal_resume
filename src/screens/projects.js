
import React from "react";
import DividerCom from "../Components/utilities";
import jsonData from "../Data/Data.json";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";

function Projects() {
  const { projects } = jsonData;
  return (
    <>
      <CustomTypography variant="h1">Projects</CustomTypography>
      <DividerCom />
      <CustomGrid container spacing={2}>
        {projects.map((project, index) => (
          <CustomGrid  xs={12} sm={6} md={4} key={index}>
            <CustomTypography variant="body2">{project.title}</CustomTypography>
            <CustomGrid container alignItems="center" spacing={1}>
              <CustomGrid >
                <CustomTypography
                  variant="h6"
                  sx={{fontWeight:"700", fontSize:"1.1rem"}}
                >
                  Environment:
                </CustomTypography>
              </CustomGrid>
              <CustomGrid >
                <CustomTypography
                  variant="body1"
                  component="span"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {project.technologies.join(", ")}
                </CustomTypography>
              </CustomGrid>
            </CustomGrid>
            <br/>
            <CustomTypography variant="body1">{project.description}</CustomTypography>
          </CustomGrid>
        ))}
      </CustomGrid>
     
    </>
  );
}

export default Projects;
