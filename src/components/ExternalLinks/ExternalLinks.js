import React, { Component } from "react";

import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

import Navbar from "../Navbar";
import Footer from "../Footer";
export default class ExternalLinks extends Component {
  handleAboutUsClick = () => {
    window.open("http://svastha.in/about", "_blank");
  };
  handleContactUsClick = () => {
    window.open("https://svastha.in/contact/", "_blank");
  };
  handleVolunteerClick = () => {
    window.open("https://svastha.in/volunteer/", "_blank");
  };
  render() {
    return (
      <>
        <Navbar />
        <Container
          maxWidth="md"
          component="main"
          style={{ marginTop: "20px", marginBottom: "80px" }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card
                style={{
                  background:
                    "linear-gradient(90deg, rgba(249,240,255,1) 0%, rgba(242,217,217,1) 50%)",
                }}
              >
                <CardActionArea onClick={this.handleAboutUsClick}>
                  <CardContent>
                    <Typography style={{ color: "#E24047" }} variant="h4">
                      About Us
                    </Typography>
                    <Typography variant="body1" style={{ color: "#536162" }}>
                      Click here to know more about us
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                style={{
                  background:
                    "linear-gradient(90deg, rgba(249,240,255,1) 0%, rgba(242,217,217,1) 50%)",
                }}
              >
                <CardActionArea onClick={this.handleContactUsClick}>
                  <CardContent>
                    <Typography style={{ color: "#E24047" }} variant="h4">
                      Contact Us
                    </Typography>
                    <Typography variant="body1" style={{ color: "#536162" }}>
                      Have something to share? Click here to connect with us
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                style={{
                  background:
                    "linear-gradient(90deg, rgba(249,240,255,1) 0%, rgba(242,217,217,1) 50%)",
                }}
              >
                <CardActionArea onClick={this.handleVolunteerClick}>
                  <CardContent>
                    <Typography style={{ color: "#E24047" }} variant="h4">
                      Volunteers
                    </Typography>
                    <Typography variant="body1" style={{ color: "#536162" }}>
                      Click here to know more about the team
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </>
    );
  }
}
