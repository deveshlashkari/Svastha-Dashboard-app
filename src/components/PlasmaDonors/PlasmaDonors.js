import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Grid,
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Loader from "react-loader-spinner";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { getPlasmaDonors } from "../../../Services/API";
import { withRouter } from "next/router";
const styles = {
  table: {
    minWidth: 650,
  },
  root: { flexGrow: 1 },
  tableHeader: {
    background: "#E24047",
    color: "white",
  },
};

class PlasmaDonors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      donorsList: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    getPlasmaDonors().then((data) => {
      if (data.data.status === "success") {
        let tempArr = [];
        data.data.plasma_donors.map((_data) => {
          tempArr.push({
            id: _data.id,
            name: _data.name,
            email: _data.email,
            contact: _data.contact,
            address: _data.address,
            age: _data.age,
            gender: _data.gender,
            bloodGroup: _data.blood_group,
            aadharNumber: _data.adhar_card,
            dateOfRecovery:
              _data.date_of_recovery !== null ? _data.date_of_recovery : "N/A",
            status: _data.status,
          });
        });
        this.setState({
          donorsList: tempArr,
          isLoading: false,
        });
      }
    });
  };

  redirectToHome = () => {
    this.props.router.push("/");
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
        <div className={classes.root}>
          <AppBar position="sticky" style={{ backgroundColor: "white" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={this.redirectToHome}
              >
                <KeyboardBackspaceIcon
                  style={{
                    color: "#E24047",
                    height: "35px",
                    width: "35px",
                    marginTop: "5px",
                  }}
                />
              </IconButton>
              <div style={{ flexGrow: 1 }}>
                <img src="/logo.jpg" style={{ height: "50px" }} />
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <Container maxWidth="xl" component="main" style={{ marginTop: "20px" }}>
          <Grid container style={{ marginBottom: "20px" }}>
            <Grid item xs={12} justify="center">
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: "#E24047" }}
              >
                Plasma Donors
              </Typography>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#E24047" }}>
                <TableRow>
                  <TableCell style={{ color: "white" }}>Name</TableCell>
                  <TableCell style={{ color: "white" }}>Email</TableCell>
                  <TableCell style={{ color: "white" }}>Contact</TableCell>
                  <TableCell style={{ color: "white" }}>Address</TableCell>
                  <TableCell style={{ color: "white" }}>Age</TableCell>
                  <TableCell style={{ color: "white" }}>Gender</TableCell>
                  <TableCell style={{ color: "white" }}>Blood Group</TableCell>
                  <TableCell style={{ color: "white" }}>
                    Aadhar Card Number
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    Date of Recovery
                  </TableCell>
                  <TableCell style={{ color: "white" }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.donorsList.map((data) => (
                  <TableRow>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.contact}</TableCell>
                    <TableCell>{data.address}</TableCell>
                    <TableCell>{data.age}</TableCell>
                    <TableCell>{data.gender}</TableCell>
                    <TableCell>{data.bloodGroup}</TableCell>
                    <TableCell>{data.aadharNumber}</TableCell>
                    <TableCell>{data.dateOfRecovery}</TableCell>
                    <TableCell>{data.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(withRouter(PlasmaDonors));
