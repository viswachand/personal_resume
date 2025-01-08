import React from "react";
// import { ListItem, ListItemText } from "@mui/material";
// import jsonData from "../Data/Data.json";
import { DividerCom, HighlightText } from "../Components/utilities";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";
import CustomBox from "../Components/box";
import CustomButton from "../Components/button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as ScrollLink } from "react-scroll";

function AboutUS({ aboutUs, keyCompetencies }) {
  const { title, summary } = aboutUs;
  // const certifications = jsonData.certifications || [];

  // Function to highlight specific text
  const phrasesToHighlight = [
    "Software Engineer",
    "3.5 years of professional experience",
  ];

  return (
    <>
      {/* Title Section */}
      <CustomTypography variant="h1">{title}</CustomTypography>
      <DividerCom />

      {/* Summary Section */}
      {summary.map((text, index) => (
        <CustomTypography key={index} variant="body1" sx={{ mb: 2, mt: 3 }}>
          <HighlightText text={text} phrases={phrasesToHighlight} />
        </CustomTypography>
      ))}

      {/* Key Competencies Section */}
      <CustomTypography variant="h1" sx={{ mt: 4, mb: 2, fontSize: "1.5rem" }}>
        Key Competencies
      </CustomTypography>
      <CustomBox sx={{ m: 2 }}>
        <CustomGrid
          container
          spacing={2}
          direction="row"
          sx={{
            justifyContent: "space-between",
          }}
        >
          {keyCompetencies.map((competency, index) => (
            <React.Fragment key={index}>
              <CustomGrid size={{ xs: 12, md: 6 }}>
                <CustomTypography
                  variant="body1" 
                >
                  <strong>{competency.title}</strong> {competency.description}
                </CustomTypography>
              </CustomGrid>
            </React.Fragment>
          ))}
        </CustomGrid>
      </CustomBox>

      <ScrollLink to="experience" smooth={true} duration={1000} offset={0}>
        <CustomBox
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            m: "3rem 0 2rem 0",
          }}
        >
          <CustomButton variant="contained" endIcon={<ArrowDropDownIcon />}>Read More</CustomButton>
        </CustomBox>
      </ScrollLink>

      {/* Certifications Section */}
      {/* {certifications.length > 0 && (
        <>
          <CustomTypography variant="h1" sx={{ mb: 2 }}>
            Certifications
          </CustomTypography>

          <CustomGrid container spacing={2}>
            {certifications.map((certification, index) => (
              <CustomGrid  xs={12} sm={6} md={3} key={index}>
                <ListItem>
                  <ListItemText
                    primary={
                      <CustomTypography variant="h6">
                        {certification.name}
                      </CustomTypography>
                    }
                    secondary={`Year: ${certification.year}`}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: "black",
                        fontWeight: "bold",
                      },
                      "& .MuiListItemText-secondary": {
                        color: "gray",
                      },
                    }}
                  />
                </ListItem>
              </CustomGrid>
            ))}
          </CustomGrid>
        </>
      )} */}
    </>
  );
}

export default AboutUS;
