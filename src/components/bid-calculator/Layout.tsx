"use client";

import React from "react";
import Image from "next/image";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import {
  Grid,
  Paper,
  FormControlLabel,
  Switch,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useLocalStorage } from "~/hooks/useLocalStorage";

const defaultTheme = createTheme({
  palette: {
    primary: lightBlue,
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: lightBlue,
  },
});

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>("darkMode", false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : defaultTheme}>
      <CssBaseline />
      <div
        style={{
          backgroundImage: "url(/img/bid-calculator/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Container fixed maxWidth="sm">
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: 2,
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              spacing={2}
              sx={{ py: 2 }}
            >
              <Grid item>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item style={{ marginRight: 5 }}>
                    <Image
                      src="/img/bid-calculator/icon.png"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </Grid>
                  <Grid item>
                    <Typography component="h1" variant="h5" color={"black"}>
                      child consulting
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Paper elevation={5}>
              <Box p={2}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  direction="column"
                  spacing={2}
                >
                  <Grid item>{children}</Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={darkMode}
                          onChange={() => setDarkMode(!darkMode)}
                        />
                      }
                      label="Dark Mode"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};
