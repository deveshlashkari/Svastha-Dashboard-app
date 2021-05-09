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
import Loader from "react-loader-spinner";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getAllEmergencyCategory } from "../../../Services/API";

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
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    getAllEmergencyCategory().then((data) => {
      let networkCallData = data.data;
      let tempArr = [];
      if (networkCallData.status === "success") {
        try {
          if (networkCallData.categories) {
            if (networkCallData.categories.length !== 0) {
              networkCallData.categories.map((_data) => {
                tempArr.push({
                  id: _data.id,
                  formRoute: _data.form_route,
                  name: _data.name,
                  updatedAt: _data.updated_at,
                });
              });
              this.setState({
                categories: tempArr,
                isLoading: false,
              });
            }
          }
        } catch (error) {
          console.error();
        }
      }
    });
  };

  render() {
    const { classes } = this.props;
    return this.state.isLoading ? (
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
      <>
        <Navbar />
        <Container
          component="main"
          maxWidth="md"
          style={{ marginTop: "20px", marginBottom: "85px" }}
        >
          <CssBaseline />
          <Grid container spacing={3}>
            {this.state.categories.map((data) => (
              <Grid item xs={12}>
                <Link href={data.formRoute}>
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
                            {data.name}
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
            ))}
          </Grid>
        </Container>

        <Footer selectedIndex="3" />
      </>
    );
  }
}
export default withStyles(styles)(Contribute);
