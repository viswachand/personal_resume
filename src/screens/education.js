import React from "react";
import DividerCom from "../Components/utilities";
import jsonData from "../Data/Data.json";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";

function Education() {
  const { degree, institution, location, year } = jsonData.education;

  return (
    <>
      <CustomTypography variant="h1">Education</CustomTypography>
      <DividerCom />
      <CustomGrid container rowSpacing={0.5}>
        <CustomGrid size={{ xs: 12, md: 8 }}>
          <a
            href="https://svuniversity.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomTypography variant="body2">{institution}</CustomTypography>
          </a>
        </CustomGrid>
        <CustomGrid size={{ xs: 6, md: 4 }}>
          <CustomTypography variant="h6"> {location}</CustomTypography>
        </CustomGrid>

        <CustomGrid size={{ xs: 12, md: 8 }}>
          <CustomTypography variant="h7"> {degree}</CustomTypography>
        </CustomGrid>
        <CustomGrid size={{ xs: 12, md: 4 }}>
          <CustomTypography variant="h7"> {year}</CustomTypography>
        </CustomGrid>
      </CustomGrid>
    </>
  );
}

export default Education;
