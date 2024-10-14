
import React from "react";
import DividerCom from "../Components/utilities";
import jsonData from "../Data/Data.json";
import Grid from "@mui/material/Grid2";
import CustomTypography from "../Components/typography";

function Education() {
  const { degree, institution, location, year } = jsonData.education;
  

  return (
    <>
      <CustomTypography variant="h1">Education</CustomTypography>
      <DividerCom />
      <Grid container rowSpacing={0.5}>
        {/* <React.Fragment> */}

        <Grid size={{ xs: 12, md: 8 }}>
          <a href="https://svuniversity.edu.in/" target="_blank" rel="noopener noreferrer" >
            <CustomTypography variant="body2">{institution}</CustomTypography>
          </a>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <CustomTypography variant="h6"> {location}</CustomTypography>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <CustomTypography variant="h7"> {degree}</CustomTypography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CustomTypography variant="h7"> {year}</CustomTypography>
        </Grid>
        {/* </React.Fragment> */}
      </Grid>
    </>
  );
}

export default Education;
