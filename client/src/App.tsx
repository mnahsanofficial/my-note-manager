import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Box>
            <Typography variant="h1">Bookmarks</Typography>
          </Box>
        }
      />
      <Route
        path="bookmarks"
        element={
          <Box>
            <Typography variant="h1">Bookmarks</Typography>
          </Box>
        }
      />
      <Route
        path="archive"
        element={
          <Box>
            <Typography variant="h1">Archive</Typography>
          </Box>
        }
      />
      <Route
        path="settings"
        element={
          <Box>
            <Typography variant="h1">Settings</Typography>
          </Box>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
