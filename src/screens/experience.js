import React from "react";
import CustomTypography from "../Components/typography";
import CustomBox from "../Components/box";
import CustomGrid from "../Components/grid";
import CustomButton from "../Components/button";
import { DividerCom, HighlightText } from "../Components/utilities";
import ArticleIcon from "@mui/icons-material/Article";

const phrasesToHighlight = [
  "front-end development team",
  "Punjab National Bank",
  "Full Stack Developer",
  "Software Engineer",
  "SC CODE WORKS",
  "Software Development Life Cycle",
  "IBM AS400",
];

function Experience({ experience }) {
  return (
    <>
      <CustomTypography variant="h2" color="primary.light" sx={{ mb: 2 }}>
        Experience
      </CustomTypography>
      <DividerCom />
      <CustomBox sx={{ width: "100%" }}>
        {experience.map((item, index) => (
          <CustomBox key={index} sx={{ mb: 3 }}>
            {/* Row: left (company+title) | right (location+duration) */}
            <CustomGrid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: "100%", mb: 1 }}
            >
              {/* Left side: Company + Title */}
              <CustomGrid size={{ xs: 12, md: 8 }}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <CustomTypography variant="h4" color="body.light">
                    {item.company}
                  </CustomTypography>
                </a>
                <CustomTypography variant="h7">{item.title}</CustomTypography>
              </CustomGrid>

              {/* Right side: Location + Duration */}
              <CustomGrid
                size={{ xs: 12, md: 4 }}
                sx={{
                  textAlign: { xs: "left", md: "right" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "flex-start", md: "flex-end" },
                }}
              >
                <CustomTypography
                  variant="h4"
                  color="background.text"
                  sx={{ fontWeight: 500 }}
                >
                  {item.location}
                </CustomTypography>
                <CustomTypography variant="h7">
                  {item.duration}
                </CustomTypography>
              </CustomGrid>
            </CustomGrid>

            {/* Description */}
            {item.Description && item.Description.length > 0 && (
              <CustomGrid xs={12}>
                <CustomTypography variant="body1" sx={{ mb: 2 }}>
                  <HighlightText
                    text={item.Description[0]}
                    phrases={phrasesToHighlight}
                  />
                </CustomTypography>

                {item.Description.length > 1 && (
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {item.Description.slice(1).map((desc, idx) => (
                      <li key={idx} style={{ marginBottom: "3px" }}>
                        <CustomTypography variant="body1">
                          <HighlightText
                            text={desc}
                            phrases={phrasesToHighlight}
                          />
                        </CustomTypography>
                      </li>
                    ))}
                  </ul>
                )}

                {/* <CustomBox
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    m: "2rem 0 1rem 0",
                  }}
                > */}
                  {/* <CustomButton
                    variant="contained"
                    endIcon={<ArticleIcon fontSize="small" />}
                    href={item.journey || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read more about my ${item.company} journey in this article`}
                  >
                    {item.buttonText}
                  </CustomButton> */}
                {/* </CustomBox> */}
              </CustomGrid>
            )}
          </CustomBox>
        ))}
      </CustomBox>
    </>
  );
}

export default Experience;
