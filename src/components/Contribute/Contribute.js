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
    color: "#E24047",
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
  cardRoot: {
    background:
      "linear-gradient(90deg, rgba(249,240,255,1) 0%, rgba(242,217,217,1) 50%)",
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
        <Container
          component="main"
          maxWidth="md"
          style={{ marginTop: "20px", marginBottom: "85px" }}
        >
          <CssBaseline />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Link href="/plasmadonor/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.plasmaDonorText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
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
              <Link href="/oxygensupplier/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.oxygenText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
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
              <Link href="/mentalhealth/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.oxygenText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Mental Health Counselling Form
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
              <Link href="/homeconsultation/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.oxygenText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Home Consultation Form
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
              <Link href="/hostel/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.oxygenText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Hostel to Quarantine Form
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
              <Link href="/funeralservices/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.oxygenText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Funeral Services Form
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
              <Link href="/bloodbank/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.oxygenText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Blood Bank Form
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
              <Link href="/testinganddiagnostics/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.oxygenText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Testing & Diaganostics Form
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
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.medicineText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Hospitals & Beds Form
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
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.medicineText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Medicine Form
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
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.volunteerText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
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
            <Grid item xs={12}>
              <Link href="/ambulance/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.volunteerText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Ambulance Form
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
              <Link href="/foodservices/new">
                <a>
                  <Card>
                    <CardContent className={classes.cardRoot}>
                      <div className={classes.volunteerText}>
                        <AddBoxIcon
                          style={{
                            color: "#E24047",
                            marginTop: "11px",
                            marginBottom: "-9px",
                          }}
                        />
                        <Typography
                          className={classes.headingFont}
                          style={{ color: "#E24047" }}
                        >
                          Food Services Form
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
          </Grid>
        </Container>

        <Footer selectedIndex="3" />
      </>
    );
  }
}
export default withStyles(styles)(Contribute);
