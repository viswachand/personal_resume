import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import EmailIcon from "@mui/icons-material/Email";

export const cardData = [
  {
    id: "about", // Updated to match the section ID
    heading: "About",
    icon: <PersonIcon />, // Use the component directly
  },
  {
    id: "experience", // Updated to match the section ID
    heading: "Experience",
    icon: <WorkIcon />, // Added icon
  },
  {
    id: "education", // Updated to match the section ID
    heading: "Education",
    icon: <SchoolIcon />, // Added icon
  },
  {
    id: "skills", // Updated to match the section ID
    heading: "Skills",
    icon: <StarBorderIcon />, // Added icon
  },
  {
    id: "resume", // Updated to match the section ID
    heading: "Resume",
    icon: <FilePresentIcon />, // Added icon
    url:"https://drive.google.com/file/d/1tJg8hpSuwQtQKQ4kFlBnR8Bg2bmikFR1/view?usp=drive_link"
  },
  {
    id: "contact", // Updated to match the section ID
    heading: "Contact",
    icon: <EmailIcon />, // Added icon
  },
];


export const socialMedia = [
  {
    id: "linkedin", // Add a unique id
    platform: "LinkedIn",
    icon: "LinkedIn",
    url: "https://www.linkedin.com/in/viswachand-akkanambattu-9aa558147/",
  },
  {
    id: "github", // Add a unique id
    platform: "GitHub",
    icon: "GitHub",
    url: "https://github.com/viswachand",
  },
];