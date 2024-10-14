import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import jsonData from "../Data/Data.json";
import DividerCom from "../Components/utilities";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid"

function AboutUS() {
  const { title, summary } = jsonData.aboutUs;
  const certifications = jsonData.certifications;

  return (
    <>
      <CustomTypography variant="h1">{title}</CustomTypography>
      <DividerCom />

      {summary.map((text, index) => (
        <CustomTypography key={index} variant="body1" sx={{ mb: 2, mt: 3 }}>
          {text}
        </CustomTypography>
      ))}

      <CustomTypography variant="h1" sx={{ mb: 2 }}>
        Certifications
      </CustomTypography>

      <CustomGrid container spacing={2}>
        {certifications.map((certification, index) => (
          <CustomGrid xs={3} sm={6} key={index}>
            <ListItem>
              <ListItemIcon sx={{ minWidth: "auto" }}>
                <img
                  src={certification.icon}
                  alt={certification.name}
                  style={{ width: 70, height: 70 }}
                />
              </ListItemIcon>
              <ListItemText
                primary={certification.name}
                secondary={`Year: ${certification.year}`}
                sx={{
                  "& .MuiListItemText-primary": {
                    color: "Black", // Change this to your desired color
                  },
                  "& .MuiListItemText-secondary": {
                    color: "gray", // You can also style the secondary text if needed
                  },
                }}
              />
            </ListItem>
          </CustomGrid>
        ))}
      </CustomGrid>
    </>
  );
}

export default AboutUS;
