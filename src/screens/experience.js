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
      <CustomTypography variant="h1">Experience</CustomTypography>
      <DividerCom />
      <CustomBox sx={{ width: "100%" }}>
        <CustomGrid container rowSpacing={0.5} sx={{ mb: 2 }}>
          {experience.map((item, index) => (
            <React.Fragment key={index}>
              <CustomGrid size={{ xs: 12, md: 8 }}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <CustomTypography variant="body2">
                    {item.company}
                  </CustomTypography>
                </a>
              </CustomGrid>
              <CustomGrid size={{ xs: 12, md: 4 }}>
                <CustomTypography variant="h6">
                  {item.location}
                </CustomTypography>
              </CustomGrid>

              <CustomGrid size={{ xs: 12, md: 8 }}>
                <CustomTypography variant="h7"> {item.title}</CustomTypography>
              </CustomGrid>
              <CustomGrid size={{ xs: 12, md: 4 }}>
                <CustomTypography variant="h7">
                  {item.duration}
                </CustomTypography>
              </CustomGrid>
              <CustomGrid xs={12}>
                <CustomTypography
                  variant="h3"
                  sx={{ fontWeight: "bold", margin: "1rem 0" }}
                >
                  Description:
                </CustomTypography>
                {item.Description && item.Description.length > 0 && (
                  <>
                    {/* First Description item displayed normally */}
                    <CustomTypography variant="body1" sx={{ mb: 2 }}>
                      <HighlightText
                        text={item.Description[0]}
                        phrases={phrasesToHighlight}
                      />
                    </CustomTypography>

                    {/* Remaining items displayed as a list */}
                    <CustomTypography
                      variant="h3"
                      sx={{ fontWeight: "bold", margin: "1rem 0" }}
                    >
                      Responsibilities:
                    </CustomTypography>
                    {item.Description.length > 1 && (
                      <ul style={{ paddingLeft: "20px", margin: 0 }}>
                        {item.Description.slice(1).map((desc, index) => (
                          <li key={index} style={{ marginBottom: "8px" }}>
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
                    <CustomBox
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        m: "2rem 0 1rem 0",
                      }}
                    >
                      <CustomButton
                        variant="contained"
                        endIcon={<ArticleIcon fontSize="small" />}
                        href={item.journey || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read more about my Moonraft journey in this article"
                      >
                        {item.buttonText}
                      </CustomButton>
                    </CustomBox>
                  </>
                )}
              </CustomGrid>
            </React.Fragment>
          ))}
        </CustomGrid>
      </CustomBox>
    </>
  );
}

export default Experience;
