import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import { cardData, socialMedia } from "./Data/menu";
import jsonData from "./Data/Data.json";
import { useMediaQuery, useTheme, Grid2 } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu icon
import * as Icons from "@mui/icons-material";
import AboutUS from "./screens/about";
import { Link as ScrollLink } from "react-scroll";
import Experience from "./screens/experience";
import Education from "./screens/education";
import Projects from "./screens/projects";
import Skills from "./screens/skills";
import Contact from "./screens/contact";
import CustomTypography from "./Components/typography"


const drawerWidth = 300;

export default function PermanentDrawerLeft() {
  const theme = useTheme();
  const { name, title } = jsonData.personalInformation;
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = React.useState(!isMobile);
  const [showScroll, setShowScroll] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const getIconComponent = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? (
      <IconComponent
        style={{ color: theme.palette.primary.light, fontSize: "33px" }}
      />
    ) : null;
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // Show button when scrolled down more than 300px and hide it if at the top of the page
    setShowScroll(
      currentScroll > 300 &&
        currentScroll <
          document.documentElement.scrollHeight - window.innerHeight
    );
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            padding: 3,
            backgroundColor: theme.palette.background.main,
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        aria-label="Navigation Drawer"
      >
        {isMobile && (
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: "absolute", right: 8, top: 0 }}
          >
            <CloseIcon />
          </IconButton>
        )}
   
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
    
        >
          <Avatar
            alt="Bindu Cattamanchi"
            src="/icons/1721911796065.jpeg" 
            sx={{ width: 150, height: 150, mb: 3 }} 
          />
        </Box>

        <CustomTypography align="center" color="primary.light" variant="h2">
          {name}
        </CustomTypography>
        <CustomTypography
          align="center"
          color="primary.light"
          variant="h3"
          sx={{ mb: 1, mt: 1 }}
        >
          {title}
        </CustomTypography>
        <Grid2
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {socialMedia.map((media) => (
            <Grid2 item key={media.id} sx={{ mt: 2 }}>
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 8px" }}
              >
                {getIconComponent(media.icon)}
              </a>
            </Grid2>
          ))}
        </Grid2>
        <List>
          {cardData.map(({ id, heading, icon, url }, index) =>
            url ? (
              <ListItem key={`${id}-${index}`} disablePadding>
                <ListItemButton
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  disableRipple
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={heading} />
                </ListItemButton>
              </ListItem>
            ) : (
              <ScrollLink
                key={`${id}-${index}`} // Ensure unique key
                to={id}
                smooth={true}
                duration={1000}
                offset={-70}
                spy={true}
                exact="true"
              >
                <ListItem disablePadding>
                  <ListItemButton onClick={toggleDrawer} disableRipple>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={heading} />
                  </ListItemButton>
                </ListItem>
              </ScrollLink>
            )
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        {/* <Toolbar /> */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              backgroundColor: "primary.main",
              color: "primary.light",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <div id="about">
          <Box sx={{ p: 2 }}>
            <AboutUS />
          </Box>
        </div>
        <div id="experience">
          <Box
            sx={{ backgroundColor: theme.palette.background.verylight, p: 4 }}
          >
            <Experience />
          </Box>
        </div>
        <div id="education">
          <Box sx={{ p: 2 }}>
            <Education />
          </Box>
        </div>
        <div id="projects">
          <Box
            sx={{ backgroundColor: theme.palette.background.verylight, p: 4 }}
          >
            <Projects />
          </Box>
        </div>
        <div id="skills">
          <Box sx={{ p: 2 }}>
            <Skills />
          </Box>
        </div>
        <div id="contact">
          <Box
            sx={{ backgroundColor: theme.palette.background.verylight, p: 4 }}
          >
            <Contact />
          </Box>
        </div>
      </Box>

      {showScroll && (
        <IconButton
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: theme.palette.primary.main,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
          component={ScrollLink}
          to="about" // Change this to your first section's ID
          smooth={true}
          duration={500}
          aria-label="Scroll to top"
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </Box>
  );
}
