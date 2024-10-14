import  Divider  from "@mui/material/Divider";

function DividerCom() {
  return (
    <>
      <Divider
        sx={{
          borderColor: "primary.main",
          borderWidth: 2,
          margin: "16px 0",
          width: "6rem",
        }}
      ></Divider>
    </>
  );
}

export default DividerCom;
