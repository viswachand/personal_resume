import { Box } from '@mui/material';

function CustomBox({ children, ...props }) {
  return (
    <Box {...props}>
      {children}
    </Box>
  );
}

export default CustomBox;