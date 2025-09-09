import React from "react";
import { DividerCom } from "../Components/utilities";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";

function Education({ education }) {
  return (
    <>
      <CustomTypography variant="h2" color="primary.light" sx={{ mb: 2 }}>
        Education
      </CustomTypography>
      <DividerCom />
      {education.map((edu, index) => (
        <CustomGrid
          container
          key={index}
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          {/* Left side: Institution + Degree */}
          <CustomGrid size={{ xs: 12, md: 8 }}>
            <a href={edu.url} target="_blank" rel="noopener noreferrer">
              <CustomTypography variant="h4" color="body.light">
                {edu.institution}
              </CustomTypography>
            </a>
            <CustomTypography variant="h7">{edu.degree}</CustomTypography>
          </CustomGrid>

          {/* Right side: Location + Year */}
          <CustomGrid
            size={{ xs: 12, md: 4 }}
            sx={{ textAlign: { xs: "left", md: "right" } }}
          >
            <CustomTypography
              variant="h4"
              color="background.text"
              sx={{ fontWeight: 500 }}
            >
              {edu.location}
            </CustomTypography>
            <CustomTypography variant="h7">{edu.year}</CustomTypography>
          </CustomGrid>
        </CustomGrid>
      ))}
    </>
  );
}

export default Education;
