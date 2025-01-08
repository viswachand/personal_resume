import Divider from "@mui/material/Divider";

// DividerCom Component
export const DividerCom = () => {
  return (
    <Divider
      sx={{
        borderColor: "primary.main",
        borderWidth: 2,
        margin: "10px 0",
        width: "6rem",
      }}
    />
  );
};

// HighlightText Component
 export const HighlightText = ({ text, phrases }) => {
  const highlightText = (text) => {
    const regex = new RegExp(`(${phrases.join("|")})`, "g");
    return text
      .split(regex)
      .map((part, index) =>
        phrases.includes(part) ? <strong key={index}>{part}</strong> : part
      );
  };

  return <>{highlightText(text)}</>;
};
