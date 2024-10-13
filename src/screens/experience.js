import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import jsonData from "../Data/Data.json";
import Grid from "@mui/material/Grid2";

function Experience() {
  const { experience } = jsonData;

  return (
    <>
      <Typography variant="h1">Experience</Typography>
      <Divider
        sx={{
          borderColor: "primary.main",
          borderWidth: 2,
          margin: "16px 0",
          width: "6rem",
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={0.5} >
          {experience.map((item, index) => (
            <React.Fragment key={index}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="body2">{item.company}</Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <Typography variant="h6"> {item.location + ","}</Typography>
              </Grid>


              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h7"> {item.title}</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h7"> {item.duration}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", marginTop: "16px",mb:"5px" }}
                >
                  Environment:
                </Typography>
                <Grid container direction="row" spacing={1}>
                  {item.environment.map((envItem, envIndex) => (
                    <Grid item key={envIndex}>
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        {envItem}
                        {envIndex < item.environment.length - 1 && ","}{" "}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", mt: "16px", mb:"16px" }}
                >
                  Responsibilities:
                </Typography>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  {item.responsibilities.map((responsibility, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>
                      <Typography variant="body1">{responsibility}</Typography>
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





