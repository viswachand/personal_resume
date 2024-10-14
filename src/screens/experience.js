import React from "react";
import { Divider } from "@mui/material";
import jsonData from "../Data/Data.json";
import CustomTypography from "../Components/typography";
import CustomButton from "../Components/button";
import CustomBox from "../Components/box";
import CustomGrid from "../Components/grid";

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
      <CustomBox sx={{ width: "100%" }}>
        <CustomGrid container rowSpacing={0.5} sx={{ mb: 2 }}>
          {experience.map((item, index) => (
            <React.Fragment key={index}>
              <CustomGrid size={{ xs: 12, md: 8 }}>
                <CustomTypography variant="body2">
                  {item.company}
                </CustomTypography>
              </CustomGrid>
              <CustomGrid size={{ xs: 12, md: 4 }}>
                <CustomTypography variant="h6">
                  {" "}
                  {item.location}
                </CustomTypography>
              </CustomGrid>

              <CustomGrid size={{ xs: 12, md: 8 }}>
                <CustomTypography variant="h7"> {item.title}</CustomTypography>
              </CustomGrid>
              <CustomGrid size={{ xs: 12, md: 4 }}>
                <CustomTypography variant="h7">
                  {" "}
                  {item.duration}
                </CustomTypography>
              </CustomGrid>

              <CustomGrid item xs={12}>
                <CustomTypography
                  variant="h3"
                  sx={{ fontWeight: "bold", marginTop: "16px", mb: "5px" }}
                >
                  Environment:
                </CustomTypography>
                <CustomGrid container direction="row" spacing={0.4}>
                  {item.environment.map((envItem, envIndex) => (
                    <CustomGrid item key={envIndex}>
                      <CustomTypography
                        variant="body1"
                        component="span"
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        {envItem}
                        {envIndex < item.environment.length - 1 && ","}{" "}
                      </CustomTypography>
                    </CustomGrid>
                  ))}
                </CustomGrid>
              </CustomGrid>
              <CustomGrid item xs={12} mb={5}>
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
                <CustomBox
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 3,
                    mb: 3,
                  }}
                >
                  
                      <CustomButton
                        key={index}
                        variant="contained"
                        color="primary"
                        href={item.href}
                        icon="Article"
                      >
                        Read More About this Article
                      </CustomButton>
                 
                </CustomBox>
              </CustomGrid>
            </React.Fragment>
          ))}
        </CustomGrid>
      </CustomBox>
    </>
  );
}

export default Experience;
