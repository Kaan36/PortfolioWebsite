import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Container, styled, Grid, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";

import PageTransition from "../components/PageTransition";
import Navbar from "../components/landingpage/Navbar";
import Footerpage from "../components/layout/Footerpage";
import Link from "next/link";

import en from "../locales/en";
import de from "../locales/de";
import tr from "../locales/tr";

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
}));

const StyledTitleText = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  fontWeight: "400",
  paddingRight: "12px",
  color: "#1e1f26",
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "17vw",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledTitleTextSecond = styled(Typography)(({ theme }) => ({
  fontSize: "10vw",
  color: "white",
  fontWeight: "400",
  textShadow: "0px 0px 3px #1e1f26",
  paddingRight: "64px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("mm")]: {
    fontSize: "15vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "17vw",
    paddingRight: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "17vw",
    paddingRight: "24px",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  minHeight: "100vh",
  display: "flex",
  position: "relative",
}));

const StyledHeadTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "900",
  lineHeight: 1.2,
  color: "#1e1f26",
  margin: "32px 0",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.5rem",
  },
}));

const StyledHeadContent = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#1e1f26",
  fontWeight: "200",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.75rem",
  },
}));

const Imprint = () => {
  const [activeBackground, setActiveBackground] = useState("white");
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  let t;
  switch (locale) {
    case "en":
      t = en;
      break;
    case "de":
      t = de;
      break;
    case "tr":
      t = tr;
      break;
  }

  const handleBackground = (data) => {
    setActiveBackground(data);
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <PageTransition />
      <Navbar t={t} />
      <StyledContainer
        maxWidth='false'
        sx={{ backgroundColor: activeBackground }}
      >
        <Parallax
          style={{
            height: "50px",
            width: "100px",
            backgroundColor: "transparent",
            position: "absolute",
            bottom: "40%",
            left: 0,
            zIndex: 10,
          }}
          onProgressChange={(progressData) => {
            if (progressData >= 1) {
              handleBackground("#1e1f26");
            }
            if (progressData < 1) {
              handleBackground("white");
            }
          }}
          onEnter={() => {}}
          onExit={() => {}}
        />

        <Grid
          container
          spacing={0}
          sx={{
            dispaly: "flex",
            justifyContent: "center",
            paddingTop: "10vh",
            paddingBottom: "10vh",
          }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            mm={4}
            sx={{ dispaly: "flex", justifyContent: "center" }}
          >
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.title}
            </StyledHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentName}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentStreetTr}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentCityTr}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentCodeTr}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                marginTop: "32px",
              }}
            >
              {t.imprint.contentName}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentStreetDe}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.contentCityDe}
            </StyledHeadContent>
            <StyledHeadTitle
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.subtitle}
            </StyledHeadTitle>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.subContentPhoneDe}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.subContentPhoneTr}
            </StyledHeadContent>
            <StyledHeadContent
              sx={{
                color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
              }}
            >
              {t.imprint.subContentMail}
            </StyledHeadContent>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StyledHeadContent
                sx={{
                  color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                {t.imprint.subContentSource}
              </StyledHeadContent>
              <Link
                href='https://www.e-recht24.de'
                style={{
                  color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
                }}
              >
                https://www.e-recht24.de
              </Link>
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
      <StyledHeader
        sx={{
          backgroundColor: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
        }}
      >
        <Parallax translateX={[-10, -15]} style={{ display: "flex" }}>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleTextSecond>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleTextSecond>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleTextSecond>
          <StyledTitleText
            sx={{
              color: activeBackground === "white" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleText>
          <StyledTitleTextSecond
            sx={{
              textShadow: `0px 0px 3px ${
                activeBackground === "white" ? "white" : "#1e1f26"
              }`,
              color: activeBackground === "#1e1f26" ? "white" : "#1e1f26",
            }}
          >
            {t.footerpage.title1}
          </StyledTitleTextSecond>
        </Parallax>
      </StyledHeader>
      <Footerpage activeBackground={activeBackground} />
    </Box>
  );
};
export default Imprint;
