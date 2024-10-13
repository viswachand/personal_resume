import { Typography } from "@mui/material";
import DividerCom from "./utilities";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import jsonData from "../Data/Data.json";

function Skills() {
  const { skills } = jsonData;

  return (
    <>
      <Typography variant="h1">Skills</Typography>
      <DividerCom />
      {skills.map((data, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{data.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "background.verylight" }}>
            <ul>
              {data.items.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <Typography variant="body1">{skill}</Typography>
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
