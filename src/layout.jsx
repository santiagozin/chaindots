import PropTypes from "prop-types";
import Navbar from "@/components/custom/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Login from "@/components/custom/login";
import { useWeather } from "@/hook/useWeather";

const Layout = ({ children }) => {
  const { user } = useWeather();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
        contrastText: "#ffffff",
        light: "#ffffff",
        dark: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {user ? (
        <Box
          sx={{
            paddingTop: "64px",
            minHeight: {
              xs: "calc(100vh - 64px)",
              lg: "calc(100vh - 64px)",
            },
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(to bottom, #0093E9, #97D9E1)",
            backgroundAttachment: "fixed",
            width: "100%",
          }}
        >
          <Navbar />
          <main className="">{children}</main>
        </Box>
      ) : (
        <Login />
      )}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
