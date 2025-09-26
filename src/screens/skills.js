import { DividerCom } from "../Components/utilities";
import CustomTypography from "../Components/typography";
import CustomGrid from "../Components/grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

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
              {/* Section Title */}
              <CustomTypography
                variant="h4"
                sx={{ fontWeight: 600, mb: 1 }}
                color="background.text"
              >
                {section.title}
              </CustomTypography>

              {/* Items */}
              {section.items.map((item, itemIndex) => {
                // ✅ String item handling
                if (typeof item === "string") {
                  const isLink = /^https?:\/\//.test(item);
                  return isLink ? (
                    <Link
                      key={itemIndex}
                      href={item}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "block",
                        mb: 0.5,
                        ml: 2,
                        fontSize: "1.2rem",
                        textDecoration: "none",

                        color: "primary.main",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      • View Certification Badge
                    </Link>
                  ) : (
                    <CustomTypography
                      key={itemIndex}
                      variant="body1"
                      sx={{ mb: 0.5, ml: 2 }}
                    >
                      • {item}
                    </CustomTypography>
                  );
                }

                // ✅ Object item with { name, url }
                if (typeof item === "object" && item.name && item.url) {
                  return (
                    <Link
                      key={itemIndex}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "block",
                        mb: 0.5,
                        ml: 2,
                        fontSize: "1rem",
                        textDecoration: "none",
                        color: "primary.main",
                        fontWeight: "bold",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      • {item.name}
                    </Link>
                  );
                }

                return null;
              })}
            </CustomGrid>
          ))}
        </CustomGrid>
      </Paper>
    </>
  );
}

export default Skills;
