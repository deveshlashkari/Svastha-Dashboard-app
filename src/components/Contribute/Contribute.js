import React from "react";

import {
  Typography,
  Grid,
  Container,
  Button,
  CssBaseline,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Link from "next/link";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const styles = {
  headingFont: {
    fontSize: "20px",
    marginLeft: "10px",
    color: "#289672",
  },
  plasmaDonorText: {
    display: "flex",

    flexWrap: "wrap",
  },
  hospitalText: {
    display: "flex",

    flexWrap: "wrap",
  },
  oxygenText: {
    display: "flex",

    flexWrap: "wrap",
  },
  medicineText: {
    display: "flex",

    flexWrap: "wrap",
  },
  volunteerText: {
    display: "flex",

    flexWrap: "wrap",
  },
  plasmaDonorCard: {
    background:
      "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(175,255,179,1) 100%)",
    alignItems: "center",
  },
  hospitalCard: {
    background:
      "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(250,180,205,1) 100%)",
    alignItems: "center",
  },
  oxygenCard: {
    background:
      "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(250,246,180,1) 100%)",
    alignItems: "center",
  },
  medicineCard: {
    background:
      "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(240,180,250,1) 100%)",
    alignItems: "center",
  },
  volunteerCard: {
    background:
      "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(118,203,255,1) 100%)",
    alignItems: "center",
  },
  cardSecondaryText: {
    color: "#666A69",
    marginLeft: "35px",
    fontSize: "15px",
  },
};

class Contribute extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Navbar />
        <Container component="main" maxWidth="md" style={{ marginTop: "20px" }}>
          <CssBaseline />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link href="/plasmadonor/new">
                <a>
                  <Card>
                    <CardContent className={classes.plasmaDonorCard}>
                      <div className={classes.plasmaDonorText}>
                        <AddBoxIcon
                          style={{
                            color: "#289672",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography className={classes.headingFont}>
                          Plasma Bank Form
                        </Typography>
                      </div>
                      <span className={classes.cardSecondaryText}>
                        Click here to add
                      </span>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link href="/hospitals/new">
                <a>
                  {" "}
                  <Card>
                    <CardContent className={classes.hospitalCard}>
                      <div className={classes.hospitalText}>
                        <AddBoxIcon
                          style={{
                            color: "#BE255D",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#BE255D" }}
                        >
                          Hospital & Beds Availability
                        </Typography>
                      </div>
                      <span className={classes.cardSecondaryText}>
                        Click here to add
                      </span>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link href="/oxygensupplier/new">
                <a>
                  <Card>
                    <CardContent className={classes.oxygenCard}>
                      <div className={classes.oxygenText}>
                        <AddBoxIcon
                          style={{
                            color: "#FF8F00",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#FF8F00" }}
                        >
                          Oxygen for Homes Form
                        </Typography>
                      </div>
                      <span className={classes.cardSecondaryText}>
                        Click here to add
                      </span>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link href="/medicine/new">
                <a>
                  <Card>
                    <CardContent className={classes.medicineCard}>
                      <div className={classes.medicineText}>
                        <AddBoxIcon
                          style={{
                            color: "#7E22CE",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#7E22CE" }}
                        >
                          Medicine/Ambulance Form
                        </Typography>
                      </div>
                      <span className={classes.cardSecondaryText}>
                        Click here to add
                      </span>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link href="/volunteer/new">
                <a>
                  <Card>
                    <CardContent className={classes.volunteerCard}>
                      <div className={classes.volunteerText}>
                        <AddBoxIcon
                          style={{
                            color: "#1DA1F2",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#1DA1F2" }}
                        >
                          Apply as a Volunteer
                        </Typography>
                      </div>
                      <span className={classes.cardSecondaryText}>
                        Click here to apply
                      </span>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </Grid>
          </Grid>
        </Container>

        <Footer selectedIndex="3" />
      </>
    );
  }
}
export default withStyles(styles)(Contribute);
