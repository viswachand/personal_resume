import Grid from '@mui/material/Grid2';

function CustomGrid({ children, ...props }) {
  return (
    <Grid {...props}>
      {children}
    </Grid>
  );
}

export default CustomGrid;
