import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
  CssBaseline,
  ButtonBase,
  CardActionArea,
  Button,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Loader from "react-loader-spinner";
import Moment from "react-moment";

import { randomBackgroundGenerator } from "../../../Utils/CommonUtils";
import { getAllEmergencyCategory } from "../../../Services/API";

const styles = {
  mainDiv: {
    height: "100vh",
    background: "green",
  },
  PlasmaDonor: {
    background: "#020024",
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoading: true,
      categoryCount: [],
    };
  }

  componentDidMount = () => {
    getAllEmergencyCategory().then((data) => {
      let networkCallData = data.data;
      let tempArr = [];
      if (networkCallData.status === "success") {
        try {
          networkCallData.emergency_categories.map((_data) => {
            if (_data.name === "Plasma Bank") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/plasmadonor/all",
              });
            }
            if (_data.name === "Blood Bank") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/bloodbank/all",
              });
            }
            if (_data.name === "Hospitals and Beds") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/hospitals/all",
              });
            }
            if (_data.name === "Oxygen for Homes") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/oxygensupplier/all",
              });
            }
            if (_data.name === "Mental Health Counseling") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/mentalhealth/all",
              });
            }
            if (_data.name === "Home Consulation") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/homeconsultation/all",
              });
            }
            if (_data.name === "Hostel to Quarantine") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/hostel/all",
              });
            }
            if (_data.name === "Funeral Services") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/funeralservices/all",
              });
            }
            if (_data.name === "Testing and Diagnostics") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/testinganddiagnostics/all",
              });
            }
            if (_data.name === "Ambulance") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/ambulance/all",
              });
            }
            if (_data.name === "Food/Meal Services") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/foodservices/all",
              });
            }
            if (_data.name === "Medications/Injections") {
              tempArr.push({
                id: _data.id,
                name: _data.name,
                updatedAt: _data.updated_at,
                route: "/medicine/all",
              });
            }
          });
          let tempArrNew = {};

          console.log(data.data.emergency_category_count);

          this.setState({
            categories: tempArr,
            categoryCount: data.data.emergency_category_count,
            isLoading: false,
          });
        } catch (error) {
          console.error();
        }
      }
    });
  };

  handleDownloadApkClick = () => {
    window.open("http://bit.ly/Svastha-App", "_blank");
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Navbar />
        {this.state.isLoading ? (
          <Loader
            type="ThreeDots"
            color="#E24047"
            height={200}
            width={200}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ) : (
          <div>
            <Container
              maxWidth="md"
              component="main"
              style={{ marginTop: "20px", marginBottom: "85px" }}
            >
              <CssBaseline />

              <Grid container spacing={3}>
                {this.state.categories.map((item) => {
                  let cardColors = randomBackgroundGenerator();
                  return (
                    <Grid item xs={12} sm={6}>
                      <Link href={item.route}>
                        <a>
                          {" "}
                          <Card>
                            <CardContent
                              style={{
                                background:
                                  "linear-gradient(90deg, rgba(249,240,255,1) 0%, rgba(242,217,217,1) 50%)",
                              }}
                            >
                              <Typography
                                variant="h5"
                                style={{ color: "#E24047" }}
                              >
                                {item.name}
                              </Typography>
                              <Typography variant="body1">
                                Total Count :{" "}
                                {item.name === "Blood Bank"
                                  ? this.state.categoryCount.BloodBank
                                  : item.name === "Hospitals and Beds"
                                  ? this.state.categoryCount.HospitalsAndBeds
                                  : item.name === "Medications"
                                  ? this.state.categoryCount.Medications
                                  : item.name === "Mental Health Counseling"
                                  ? this.state.categoryCount
                                      .MentalHealthCounseling
                                    ? this.state.categoryCount
                                        .MentalHealthCounseling
                                    : "0"
                                  : item.name === "Plasma Bank"
                                  ? this.state.categoryCount.PlasmaBank
                                  : "0"}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                style={{ color: "#536162" }}
                              >
                                Last updated -{" "}
                                <Moment format="MMMM Do YYYY, h:mm:ss a">
                                  {item.updatedAt}
                                </Moment>
                              </Typography>
                            </CardContent>
                          </Card>
                        </a>
                      </Link>
                    </Grid>
                  );
                })}

                {/* <Grid item xs={12}>
                  <Link href="/crowdfunding">
                    <a>
                      {" "}
                      <Card>
                        <CardContent
                          style={{
                            background:
                              "linear-gradient(90deg, rgba(249,240,255,1) 0%, rgba(242,217,217,1) 50%)",
                          }}
                        >
                          <Typography
                            variant="h5"
                            style={{
                              color: "#E24047",
                            }}
                          >
                            Crowd Funding
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontFamily: "Roboto",
                              color: "#4F5152",
                            }}
                          >
                            Fundraising for fight with COVID
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
                  </Link>
                </Grid> */}
                <Grid item xs={12}>
                  <Card>
                    <CardActionArea
                      href="https://selfregistration.cowin.gov.in/"
                      target="_blank"
                    >
                      <CardContent
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(255,192,192,1) 100%)",
                        }}
                      >
                        <Typography
                          variant="h5"
                          style={{
                            color: "#FF1744",
                          }}
                        >
                          Register for Vaccination
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            fontFamily: "Roboto",
                            color: "#4F5152",
                          }}
                        >
                          Registration open for age 18+
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                {/* <Grid item xs={12}>
                  <Card>
                    <CardContent
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(255,192,192,1) 100%)",
                      }}
                    >
                      <Typography
                        variant="h5"
                        style={{
                          color: "#FF1744",
                        }}
                      >
                        Treating COVID-19 at Home
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontFamily: "Roboto",
                          color: "#4F5152",
                        }}
                      >
                        Care tips for you and others
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid> */}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    style={{ background: "#E24047" }}
                    onClick={this.handleDownloadApkClick}
                  >
                    <span style={{ color: "white" }}>Download APK</span>
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </div>
        )}
        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(Dashboard);
