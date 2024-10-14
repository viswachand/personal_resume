import * as React from "react";
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
import { useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu icon
import AboutUS from "./screens/about";
import { Link as ScrollLink } from "react-scroll";
import Experience from "./screens/experience";
import Education from "./screens/education";
import Projects from "./screens/projects";
import Skills from "./screens/skills";
import Contact from "./screens/contact";
import CustomTypography from "./Components/typography";
import CustomBox from "./Components/box";
import CustomGrid from "./Components/grid";
import CustomIcons from "./Components/icons"

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

  const handleScroll = () => {
    const currentScroll = window.scrollY;
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
    <CustomBox sx={{ display: "flex" }}>
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

        <CustomBox display="flex" justifyContent="center" alignItems="center">
          <Avatar
            alt="Bindu Cattamanchi"
            src="/icons/1721911796065.jpeg"
            sx={{ width: 150, height: 150, mb: 3 }}
          />
        </CustomBox>

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
        <CustomGrid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {socialMedia.map((media) => (
            <CustomGrid item key={media.id} sx={{ mt: 2 }}>
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 8px" }}
              >
                {CustomIcons(media.icon)}
              </a>
            </CustomGrid>
          ))}
        </CustomGrid>
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
      <CustomBox component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
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
          <CustomBox sx={{ p: 3 }}>
            <AboutUS />
          </CustomBox>
        </div>
        <div id="experience">
          <CustomBox
            sx={{ backgroundColor: theme.palette.background.verylight, p: 3 }}
          >
            <Experience />
          </CustomBox>
        </div>
        <div id="education">
          <CustomBox sx={{ p: 3 }}>
            <Education />
          </CustomBox>
        </div>
        <div id="projects">
          <CustomBox
            sx={{ backgroundColor: theme.palette.background.verylight, p: 3 }}
          >
            <Projects />
          </CustomBox>
        </div>
        <div id="skills">
          <CustomBox sx={{ p: 3 }}>
            <Skills />
          </CustomBox>
        </div>
        <div id="contact">
          <CustomBox
            sx={{ backgroundColor: theme.palette.background.verylight, p: 2 }}
          >
            <Contact />
          </CustomBox>
        </div>
      </CustomBox>

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
    </CustomBox>
  );
}
