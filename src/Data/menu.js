import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
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
    id: "projects", // Updated to match the section ID
    heading: "Projects",
    icon: <PersonalVideoIcon />, // Added icon
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
    url:"https://drive.google.com/file/d/12v0s8wc1SZ-4ZZVlSZeDZ0eP1vCU1Esu/view?usp=drive_link"
  },
  {
    id: "contact", // Updated to match the section ID
    heading: "Contact",
    icon: <EmailIcon />, // Added icon
  },
];


export const socialMedia = [
  {
    platform: "LinkedInIcon",
    icon: "LinkedIn",
    url: "https://www.linkedin.com/in/bindu-c-20981b16/",
  },
  { platform: "GitHub", icon: "GitHub", url: "https://github.com/binducattamanchi" },
];
