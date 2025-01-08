import React from "react";
import {DividerCom} from "../Components/utilities";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";

function Education({ education }) {
  return (
    <>
      <CustomTypography variant="h1">Education</CustomTypography>
      <DividerCom />
      {education.map((edu, index) => (
        <CustomGrid container key={index}>
          <CustomGrid size={{ xs: 12, md: 8 }}>
            <a
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomTypography variant="body2">
                {edu.institution}
              </CustomTypography>
            </a>
          </CustomGrid>
          <CustomGrid size={{ xs: 6, md: 4 }}>
            <CustomTypography variant="h6"> {edu.location}</CustomTypography>
          </CustomGrid>

          <CustomGrid size={{ xs: 12, md: 8 }}>
            <CustomTypography variant="h7"> {edu.degree}</CustomTypography>
          </CustomGrid>
          <CustomGrid size={{ xs: 12, md: 4 }}>
            <CustomTypography variant="h7"> {edu.year}</CustomTypography>
          </CustomGrid>
        </CustomGrid>
      ))}
    </>
  );
}

export default Education;
