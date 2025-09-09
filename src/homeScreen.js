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
import { useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuIcon from "@mui/icons-material/Menu";
import AboutUS from "./screens/about";
import { Link as ScrollLink } from "react-scroll";
import Experience from "./screens/experience";
import Education from "./screens/education";
import Skills from "./screens/skills";
import Contact from "./screens/contact";
import CustomTypography from "./Components/typography";
import CustomBox from "./Components/box";
import CustomGrid from "./Components/grid";
import CustomIcons from "./Components/icons";
import { motion } from "framer-motion";

const drawerWidth = 300;

const AnimatedSection = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 120 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
);

export default function PermanentDrawerLeft({ config }) {
  const theme = useTheme();
  const {
    personalInformation,
    aboutUs,
    experience,
    education,
    keyCompetencies,
    skills,
  } = config || {};
  const { name, title, contact } = personalInformation || {};
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = React.useState(!isMobile);
  const [showScroll, setShowScroll] = React.useState(false);

  const toggleDrawer = () => setOpen((prev) => !prev);

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

  const sectionPadding = { pl: 6, pr: 6 };

  return (
    <CustomBox sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            borderRight: 0,
            boxSizing: "border-box",
            padding: isMobile ? "16px 8px 8px" : 1,
            background: theme.palette.background.gradient,
            height: "100%",
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
            aria-label="Close navigation drawer"
            onClick={toggleDrawer}
            sx={{ position: "absolute", right: 8, top: 0 }}
          >
            <CloseIcon />
          </IconButton>
        )}

        <CustomBox display="flex" justifyContent="center" alignItems="center">
          <Avatar
            alt={name}
            src="/icons/vc1.jpeg"
            sx={{
              width: 130,
              height: 130,
              mb: 3,
              mt: 6,
              pl: 0.1,
              border: "2px solid",
              borderColor: "primary.main",
            }}
          />
        </CustomBox>

        <CustomTypography align="center" color="secondary.main" variant="h1">
          {name}
        </CustomTypography>
        <CustomTypography
          align="center"
          color="body.helight"
          variant="h5"
          sx={{ mb: 1, mt: 1 }}
        >
          {title}
        </CustomTypography>

        <CustomGrid container justifyContent="center" alignItems="center">
          {socialMedia.map((media) => (
            <CustomGrid key={media.id} sx={{ mt: 1 }}>
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 5px" }}
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
                  sx={{
                    "&.MuiButtonBase-root:hover": {
                      backgroundColor: "transparent !important",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "transparent !important",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "transparent !important",
                    },
                  }}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={heading} />
                </ListItemButton>
              </ListItem>
            ) : (
              <ScrollLink
                key={`${id}-${index}`}
                to={id}
                smooth
                duration={1000}
                offset={0}
                spy
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

      {/* Main Content */}
      <CustomBox
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", mt: 5, mb: 5 }}
      >
        {isMobile && (
          <IconButton
            aria-label="Open navigation menu"
            onClick={toggleDrawer}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              backgroundColor: theme.palette.primary.main,
              color: "primary.light",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <div id="about">
          <AnimatedSection>
            <CustomBox sx={sectionPadding}>
              <AboutUS aboutUs={aboutUs} keyCompetencies={keyCompetencies} />
            </CustomBox>
          </AnimatedSection>
        </div>

        <div id="experience">
          <AnimatedSection>
            <CustomBox
              sx={{
                backgroundColor: theme.palette.background.verylight,
                ...sectionPadding,
                pt: 6,
                pb: 6,
              }}
            >
              <Experience experience={experience} />
            </CustomBox>
          </AnimatedSection>
        </div>

        <div id="education">
          <AnimatedSection>
            <CustomBox sx={{ ...sectionPadding, pt: 6, pb: 6 }}>
              <Education education={education} />
            </CustomBox>
          </AnimatedSection>
        </div>

        <div id="skills">
          <AnimatedSection>
            <CustomBox
              sx={{
                backgroundColor: theme.palette.background.verylight,
                ...sectionPadding,
                pt: 6,
                pb: 6,
              }}
            >
              <Skills skills={skills} />
            </CustomBox>
          </AnimatedSection>
        </div>

        <div id="contact">
          <AnimatedSection>
            <CustomBox
              component="footer"
              sx={{
                ...sectionPadding,
                pt: 6,
                mb: "auto",
              }}
            >
              <Contact contact={contact} />
            </CustomBox>
          </AnimatedSection>
        </div>
      </CustomBox>

      {showScroll && (
        <IconButton
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: theme.palette.body.helight,
            color: "white",
            "&:hover": { backgroundColor: theme.palette.body.helight },
          }}
          component={ScrollLink}
          to="about"
          smooth
          duration={500}
          aria-label="Scroll to top"
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </CustomBox>
  );
}
