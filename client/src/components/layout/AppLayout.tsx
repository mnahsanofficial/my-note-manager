import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
