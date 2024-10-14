import DividerCom from "../Components/utilities";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import jsonData from "../Data/Data.json";
import CustomTypography from "../Components/typography";


function Skills() {
  const { skills } = jsonData;

  return (
    <>
      <CustomTypography variant="h1">Skills</CustomTypography>
      <DividerCom />
      {skills.map((data, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <CustomTypography>{data.title}</CustomTypography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "background.verylight" }}>
            <ul>
              {data.items.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <CustomTypography variant="body1">{skill}</CustomTypography>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
      <br />
    </>
  );
}

export default Skills;
