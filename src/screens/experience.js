import React from "react";
import { Box, Divider } from "@mui/material";
import jsonData from "../Data/Data.json";
import Grid from "@mui/material/Grid2";
import CustomTypography from "../Components/typography";

function Experience() {
  const { experience } = jsonData;

  return (
    <>
      <CustomTypography variant="h1">Experience</CustomTypography>
      <Divider
        sx={{
          borderColor: "primary.main",
          borderWidth: 2,
          margin: "16px 0",
          width: "6rem",
        }}
      />
      <Box sx={{ width: "100%"}}>
        <Grid container rowSpacing={0.5} sx={{mb:2}}>
          {experience.map((item, index) => (
            <React.Fragment key={index}>
              <Grid size={{ xs: 12, md: 8 }}>
                <CustomTypography variant="body2">
                  {item.company}
                </CustomTypography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomTypography variant="h6">
                  {" "}
                  {item.location}
                </CustomTypography>
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <CustomTypography variant="h7"> {item.title}</CustomTypography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomTypography variant="h7">
                  {" "}
                  {item.duration}
                </CustomTypography>
              </Grid>

              <Grid item xs={12}>
                <CustomTypography
                  variant="h3"
                  sx={{ fontWeight: "bold", marginTop: "16px", mb: "5px" }}
                >
                  Environment:
                </CustomTypography>
                <Grid container direction="row" spacing={0.4}>
                  {item.environment.map((envItem, envIndex) => (
                    <Grid item key={envIndex}>
                      <CustomTypography
                        variant="body1"
                        component="span"
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        {envItem}
                        {envIndex < item.environment.length - 1 && ","}{" "}
                      </CustomTypography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <CustomTypography
                  variant="h3"
                  sx={{ fontWeight: "bold", mt: "16px", mb: "16px" }}
                >
                  Responsibilities:
                </CustomTypography>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  {item.responsibilities.map((responsibility, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>
                      <CustomTypography variant="body1">
                        {responsibility}
                      </CustomTypography>
                    </li>
                  ))}
                </ul>
              </Grid>
          
            </React.Fragment>
          ))}
           
        </Grid>
      </Box>
    </>
  );
}

export default Experience;
