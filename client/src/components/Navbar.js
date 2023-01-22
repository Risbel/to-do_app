import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ editing }) => {
  const navigate = useNavigate();

  return (
    <Box style={{ with: "100%" }} sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                {editing ? "Discart" : "Pern Stack"}
              </Link>
            </Typography>

            {!editing && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/tasks/new")}
              >
                New task
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
