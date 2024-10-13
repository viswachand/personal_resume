import { Typography } from "@mui/material";
import React from "react";
import DividerCom from "./utilities";
import jsonData from "../Data/Data.json";
import Grid from "@mui/material/Grid2";

function Education() {
  const { degree, institution, location, year } = jsonData.education;
  

  return (
    <>
      <Typography variant="h1">Education</Typography>
      <DividerCom />
      <Grid container rowSpacing={0.5}>
        {/* <React.Fragment> */}

        <Grid size={{ xs: 12, md: 8 }}>
          <a href="https://svuniversity.edu.in/" target="_blank" rel="noopener noreferrer" >
            <Typography variant="body2">{institution}</Typography>
          </a>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Typography variant="h6"> {location}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h7"> {degree}</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h7"> {year}</Typography>
        </Grid>
        {/* </React.Fragment> */}
      </Grid>
    </>
  );
}

export default Education;
