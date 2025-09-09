import { DividerCom } from "../Components/utilities";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";
import Paper from "@mui/material/Paper";

function Skills({ skills }) {
  return (
    <>
      <CustomTypography variant="h2" color="primary.light" sx={{ mb: 1 }}>
        Skills
      </CustomTypography>
      <DividerCom sx={{ mb: 3 }} />
      <CustomTypography variant="body1" sx={{ mt: 3, mb: 3 }}>
        Here is a snapshot of Software Engineering skills that I bring to the
        table.
      </CustomTypography>

      <Paper elevation={3} sx={{ p: 4, mb: 2 }} square>
        <CustomGrid container spacing={4}>
          {skills.map((section, index) => (
            <CustomGrid item xs={12} sm={6} md={4} key={index}>
              {/* Title */}
              <CustomTypography
                variant="h4"
                sx={{ fontWeight: 600, mb: 1 }}
                color="background.text"
              >
                {section.title}
              </CustomTypography>

              {/* Skills under the title */}
              {section.items.map((item, itemIndex) => (
                <CustomTypography
                  key={itemIndex}
                  variant="body1"
                  sx={{ mb: 0.5, ml: 2 }}
                >
                  • {item}
                </CustomTypography>
              ))}
            </CustomGrid>
          ))}
        </CustomGrid>
      </Paper>
    </>
  );
}

export default Skills;
