import React from "react";
import { DividerCom, HighlightText } from "../Components/utilities";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";
import CustomBox from "../Components/box";
import CustomButton from "../Components/button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion"; // Make sure framer-motion@6 is installed

function AboutUS({ aboutUs, keyCompetencies }) {
  const { title, summary } = aboutUs;
  const phrasesToHighlight = [
    "Software Engineer",
    "3.5 years of professional experience",
  ];

  return (
    <>
      {/* Title Section */}
      <CustomTypography variant="h2" color="primary.light">
        {title}
      </CustomTypography>
      <DividerCom />

      {/* Summary Section */}
      {summary.map((text, index) => (
        <CustomTypography
          key={index}
          variant="body1"
          color="background.text"
          sx={{ mb: 2, mt: 3 }}
        >
          <HighlightText text={text} phrases={phrasesToHighlight} />
        </CustomTypography>
      ))}

      {/* Key Competencies Section */}
      <CustomTypography
        variant="h2"
        color="primary.light"
        sx={{ mt: 4, mb: 2, fontSize: "1.65rem" }}
      >
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
            <CustomGrid key={index} size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <CustomTypography
                  variant="body1"
                  sx={{ whiteSpace: "pre-line" }}
                >
                  <strong>{competency.title}</strong> {competency.description}
                </CustomTypography>
              </motion.div>
            </CustomGrid>
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
          <CustomButton variant="contained" endIcon={<ArrowDropDownIcon />}>
            Read More
          </CustomButton>
        </CustomBox>
      </ScrollLink>
    </>
  );
}

export default AboutUS;
