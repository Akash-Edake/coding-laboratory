import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple, red } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Img2 from "../../img/profestional-business-agencypng.png";
import { padding } from "@mui/system";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
function Home() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" class='bg1'>
          <Typography>Win Your Business Growth With Modern Ideas</Typography>
        </Container>
      </React.Fragment>


      <Grid container>
      <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={6}>
          <img src={Img2} alt="" />
        </Grid>
        <Grid item xs={4} textAlign="left">
          <span class="title-tag">
            {" "}
            <HorizontalRuleIcon sx={{ color: red[500] }} /> About Us
          </span>
          <h1>Professional Software Development Company</h1>
          <p>
            We are a leading software development company that offers top-rated
            Software Development Services due to our vast experience, team of
            skilled professionals, key business insights, and a dedicated
            working process.
          </p>
          <div>
            <CheckIcon color="success" /> Business & Consulting Agency
          </div>
          <div>
            <CheckIcon color="success" /> Software & Website Development
          </div>
          <Box>
            <ColorButton variant="contained"> Contact Us</ColorButton>
          </Box>
        </Grid>
        <Grid item xs={1}>
          
          </Grid>
      </Grid>
    </>
  );
}

export default Home;
